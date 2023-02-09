import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./header.css";
import { Button, Grid, IconButton, Menu, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import blizLogo from "../assets/BlizpushLogoNew.png";
import profile from "../assets/AvatarImg.jpeg";

const pages = ["Home", "Gallery", "Shop", "Contact"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ padding: "20px 0px", height: "85px" }}>
        {/* Logo Part */}
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${blizLogo})`,
              width: 50,
              height: 50,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box>
            <Typography
              sx={{
                color: "#677DA8",
                fontFamily: "Rubik",
                fontSize: "1.5rem",
                fontWeight:700
              }}
            >
              BIZPUSH
            </Typography>
          </Box>
        </Grid>
        {/* Tabs */}
        <Grid item xs={6} md={6} sx={{ textAlign: "center" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "#4D4D4D" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Grid>
        {/* Cart and Avatars */}
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box>
            <SearchIcon sx={{ color: "#4D4D4D" }} />
          </Box>
          <Box>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon sx={{ color: "#4D4D4D" }} fontSize="small" />
              </StyledBadge>
            </IconButton>
          </Box>
          <Box>
            <Avatar alt="Ajay Shirke" src={profile} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Header;
