import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./products.css";
import shoe1 from "../assets/fig/NikeBlue1.png";
import shoe2 from "../assets/fig/NikeRed.png"; 
import shoe3 from "../assets/fig/NikeRed2.png";
import shoe4 from "../assets/fig/NikeBlue2.png";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Products() {
  const product = [
    {
      photo: shoe1,
      name: "Nike Running shoe",
      price: "$100",
      soldOut: "500",
    },
    {
      photo: shoe2,
      name: "Nike shoe Airmax",
      price: "$115",
      soldOut: "100",
    },
    {
      photo: shoe3,
      name: "Jordan Sneaker",
      price: "$50",
      soldOut: "1500",
    },
    {
      photo: shoe4,
      name: "Nike Running shoe 2",
      price: "$220",
      soldOut: "210",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
      <Grid container disableGutters spacing={2} sx={{ padding: "20px 0px" }}>
        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          sx={{
            display: { xs: "none", md: "flex" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingLeft: "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            <Typography
              sx={{
                color: "#677DA8",
                fontWeight: 700,
                fontSize: "2.7rem",
                fontFamily: "Rubik, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Popular Products
            </Typography>
          </Box>

          {/* Products List */}

          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Grid
              md={12}
              container
              spacing={{ xs: 2, md: 8, sm: 20 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {product.map((_, index) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Box className="cardImage">
                      <img
                        src={_.photo}
                        style={{
                          height: "9rem",
                          width: "13rem",
                          objectFit: "contain",
                        }}
                      />
                      <Box className="circleGradient flexCenter">
                        <FavoriteBorderRoundedIcon
                          fontSize="sm"
                          sx={{ color: "#ffffff" }}
                        />
                      </Box>
                    </Box>
                    <Box className="flexRow">
                      <StarRoundedIcon
                        sx={{ color: "#A61473", marginRight: "10px" }}
                      />
                      <Typography
                        sx={{
                          color: "#4c4b4b",
                          fontSize: "0.8rem",
                          lineHeight: 2.5,
                          fontFamily: "Rubik",
                        }}
                      >
                        (11.6k Reviews)
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          color: "#202020",
                          fontSize: "1rem",
                          lineHeight: 1.5,
                          fontFamily: "Rubik",
                        }}
                      >
                        {_.name}
                      </Typography>{" "}
                    </Box>
                    <Box className="spaceBetween">
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Rubik",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            color: "#202020",
                          }}
                        >
                          {_.price}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Rubik",
                            textTransform: "capitalize",
                            color: "#202020",
                            textDecoration: "line-through",
                          }}
                        >
                          {_.soldOut}
                          <span
                            style={{
                              fontSize: "0.8rem",
                            }}
                          >
                            Sold Out
                          </span>
                        </Typography>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          size="small"
                          className="buyBtn"
                          sx={{backgroundColor:'#ffffff',padding:'5px 10px',borderRadius:"10px"}}
                        >
                          <Typography
                            sx={{
                              textTransform: "capitalize",
                              color: " #677DA8 !important",
                              fontSize: "0.7rem !important",
                            }}
                          >
                            Buy now
                          </Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
