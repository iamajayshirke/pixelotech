import * as React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  alpha,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./ListItems";
import Deposits from "./Deposit";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import "./dashboard.css";
import CancelIcon from "@mui/icons-material/Cancel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddCircle from "@mui/icons-material/AddCircle";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ReorderIcon from "@mui/icons-material/Reorder";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import ProductCard from "./ProductCard";
import airpods from "../../assets/products/buds.png";
import samwatch from "../../assets/products/samwatch.png";
import samwatch2 from "../../assets/products/samwatch2.png";
import applewatch from "../../assets/products/applewatch.png";
import applemonitor from "../../assets/products/monitor.png";
import pixel from "../../assets/products/pixel.png";
import echo from "../../assets/products/echo.png";
import macbook from "../../assets/products/macbook.png";
import macbook2 from "../../assets/products/macbook2.png";
import macbook3 from "../../assets/products/macbook3.png";
import nest from "../../assets/products/nest.png";
import imacpro from "../../assets/products/imacpro.png";

const pages = ["Dashboard", "About Us", "News", "User Policy"];

const products = [
  {
    img: airpods,
    name: "Apple Air Pods 2",
    price: "600",
  },
  {
    img: samwatch,
    name: "Samsung Smart Watch",
    price: "600",
  },
  {
    img: applemonitor,
    name: "Apple Monitor Pro",
    price: "600",
  },
  {
    img: applewatch,
    name: "Apple Watch Series 4",
    price: "600",
  },
  {
    img: pixel,
    name: "Google Pixel 4 XL",
    price: "600",
  },
  {
    img: echo,
    name: "Amazon Smart Speaker",
    price: "600",
  },
  {
    img: macbook,
    name: "Apple Macbook Pro 16",
    price: "600",
  },
  {
    img: macbook2,
    name: "Apple Ipad 10.2",
    price: "600",
  },
  {
    img: macbook3,
    name: "Microsoft Surface Book",
    price: "600",
  },
  {
    img: nest,
    name: "Google Nest",
    price: "600",
  },
  {
    img: imacpro,
    name: "Apple iMac Pro",
    price: "600",
  },
  {
    img: samwatch2,
    name: "Samsung Smart Watch",
    price: "600",
  },
];
const buttons = [
  <Button
    variant="text"
    className="groupBtns"
    style={{ border: "2px solid #F5F6F7" }}
    key="one"
    startIcon={<FilterListIcon sx={{ color: "#6B7A99" }} />}
  >
    <Typography sx={{ fontSize: "0.7rem", color: "#6B7A99" }}>
      Filter
    </Typography>{" "}
  </Button>,
  <Button
    variant="text"
    className="groupBtns"
    style={{ border: "2px solid #F5F6F7" }}
    key="two"
    startIcon={<SearchIcon sx={{ color: "#6B7A99" }} />}
  >
    <Typography sx={{ fontSize: "0.7rem", color: "#6B7A99" }}>
      Search
    </Typography>
  </Button>,
  <Button
    variant="text"
    className="groupBtns"
    style={{ border: "2px solid #F5F6F7" }}
    key="three"
    startIcon={<EditIcon sx={{ color: "#6B7A99" }} />}
  >
    <Typography sx={{ fontSize: "0.7rem", color: "#6B7A99" }}>Edit</Typography>
  </Button>,
  <Button
    variant="text"
    className="groupBtns"
    style={{ border: "2px solid #F5F6F7" }}
    key="four"
    startIcon={<DeleteIcon sx={{ color: "#6B7A99" }} />}
  >
    <Typography sx={{ fontSize: "0.7rem", color: "#6B7A99" }}>
      Delete
    </Typography>
  </Button>,
];

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
      fontSize: "0.7rem",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8),
        backgroundColor: "#F7F8FA",
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [value, setValue] = React.useState("one");

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [alignment, setAlignment] = React.useState("web");

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme} sx={{ background: "#F7F8FA" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{ backgroundColor: "#F7F8FA", color: "#4D5E80" }}
        >
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              className="boxShadowIcon"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              //   onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
                backgroundColor: "#ffffff",
                color: "#C3CAD9",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              fontFamily="Rubik"
              fontWeight="700"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Constructor
            </Typography>
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
                  <Typography
                    sx={{
                      color: "#7D8FB3",
                      fontWeight: "700",
                      fontSize: "0.8rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
            {/* Search */}
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "50px",
                marginRight: "7rem",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Transactions and Documents"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            {/* Profile */}
            <Box className="profileTab">
              <Box className="flexRow">
                <Avatar
                  sx={{ width: 24, height: 24, marginRight: "10px" }}
                ></Avatar>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: "#6B7A99",
                  }}
                >
                  Ajay Shirke
                </Typography>
              </Box>
              <IconButton
                className="boxShadowIcon"
                color="inherit"
                sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
              >
                <Badge variant="dot" color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                className="boxShadowIcon"
                color="inherit"
                sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
              >
                <CancelIcon color="inherit" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: "#F7F8FA !important",
            color: "#4D5E80",
            height: "100%",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ marginBottom: "4rem" }}>{mainListItems}</Box>

              <Box>{secondaryListItems}</Box>
            </Box>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            msOverflowY: "hidden",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    // height: 240,
                  }}
                >
                  <Box className="flexBetween">
                    <Box className="flexRow">
                      <IconButton
                        className="boxShadowIcon"
                        color="inherit"
                        size="small"
                        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
                      >
                        <ShoppingBasketIcon
                          fontSize="small"
                          className="boxShadowIcon"
                        />
                      </IconButton>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "0.9rem",
                          color: "#6B7A99",
                        }}
                      >
                        Products
                      </Typography>
                    </Box>
                    <Box>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                      >
                        <Tab
                          value="one"
                          label="Active"
                          sx={{
                            fontWeight: "700",
                            textTransform: "capitalize",
                            color: "#7D8FB3",
                          }}
                        />
                        <Tab
                          value="two"
                          label="Draft"
                          sx={{
                            fontWeight: "700",
                            textTransform: "capitalize",
                            color: "#7D8FB3",
                          }}
                        />
                        <Tab
                          value="three"
                          label="Assembly"
                          sx={{
                            fontWeight: "700",
                            textTransform: "capitalize",
                            color: "#7D8FB3",
                          }}
                        />
                      </Tabs>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        startIcon={<AddCircle />}
                        sx={{
                          borderRadius: "20px",
                          background: "#8833FF",
                          padding: "5px 15px",
                        }}
                      >
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            fontSize: "0.8rem",
                            fontWeight: "700",
                          }}
                        >
                          Add Product
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                  {/* 2nd Row */}
                  <Box className="flexBetween" sx={{ mt: 1, mb: 1 }}>
                    <Box className="flexRow">
                      <IconButton
                        className="boxShadowIcon"
                        color="inherit"
                        size="small"
                        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
                      >
                        <CheckCircleOutlineIcon
                          fontSize="small"
                          className="boxShadowIcon"
                        />
                      </IconButton>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "0.7rem",
                          color: "#6B7A99",
                        }}
                      >
                        Select All
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <ButtonGroup
                          size="small"
                          aria-label="small button group"
                          sx={{ borderColor: "#ffffff" }}
                        >
                          {buttons}
                        </ButtonGroup>
                      </Box>
                    </Box>
                    <Box>
                      <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChangeToggle}
                        aria-label="Platform"
                      >
                        <ToggleButton
                          sx={{ padding: "5px" }}
                          className="toggleView"
                          value="web"
                        >
                          <ReorderIcon size="small" sx={{ color: "#C3CAD9" }} />
                        </ToggleButton>
                        <ToggleButton sx={{ padding: "5px" }} value="android">
                          <ViewModuleIcon
                            size="small"
                            sx={{ color: "#C3CAD9" }}
                          />
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                  </Box>
                  <Divider />
                  {/* Card Grids */}
                  <Box sx={{ mt: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 3, md: 4 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      {products.map((e, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                          {console.log(e, index)}
                          <Box
                            sx={{
                              backgroundColor: "#FAFBFC",
                              borderRadius: "10px",
                              mt: 1,
                              mb: 1,
                            }}
                          >
                            <Box className="productCard">
                              <img
                                src={e.img}
                                style={{
                                  height: "8rem",
                                  width: "11rem",
                                  objectFit: "contain",
                                }}
                              />
                              <Box className="flexColumn">
                                <Typography
                                  sx={{
                                    fontWeight: 700,
                                    fontSize: "0.7rem",
                                    color: "#6B7A99",
                                  }}
                                >
                                  {e.name}
                                </Typography>
                                <Button
                                  variant="text"
                                  sx={{
                                    backgroundColor: "#ffffff",
                                    boxShadow:
                                      " 0px 2px 5px rgba(38, 51, 77, 0.03)",
                                    borderRadius: "15px",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontWeight: 700,
                                      fontSize: "0.6rem",
                                      color: "#6B7A99",
                                    }}
                                  >
                                    ${e.price}
                                  </Typography>
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  Charts
                </Paper>
              </Grid>
              {/* Recent Orders */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboards() {
  return <DashboardContent />;
}
