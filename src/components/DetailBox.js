import { Box } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import "./DetailBox.css";
import Nike1 from "../assets/fig/NikeBlue.png";
import Shadow from "../assets/fig/shadow.png";
import StarIcon from "@mui/icons-material/Star";
import arrow from "../assets/fig/arrow.png";
import { useNavigate } from "react-router";

function DetailBox() {
  let navigate = useNavigate();
  function Stars({ children, times }) {
    const keys = [...Array(times).keys()];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {keys.map((item) => (
          <div key={item}>{children}</div>
        ))}
      </div>
    );
  }

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container disableGutters spacing={2} sx={{ padding: "20px 0px" }}>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "0px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={{ width: "80%" }}>
              {" "}
              <Typography
                sx={{
                  color: "#677DA8",
                  fontWeight: 700,
                  fontSize: "3.2rem",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                PURCHASE YOUR
                <span style={{ textDecorationLine: "underline" }}>
                  {" "}
                  SHOES
                </span>{" "}
                NOW.
              </Typography>{" "}
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#677DA8",
                  fontSize: "0.9rem",
                  lineHeight: 2.0,
                  letterSpacing: "0.04rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies
                tortor ac.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                flexGrow: 1,
                display: { xs: "flex" },
              }}
            >
              <Box>
                <Button className="shopBtn" onClick={handleClick}>
                  <Typography
                    sx={{
                      color: "#677DA8",
                      textTransform: "none",
                      padding: "14px 46px",
                      fontSize: "22px",
                    }}
                  >
                    Shop Now
                  </Typography>
                </Button>
              </Box>
              <Box
                className="arrowLine"
                sx={{
                  backgroundImage: `url(${arrow})`,
                }}
              ></Box>
              <Box className="reviewBox" sx={{ gap: 8 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: "normal !important",
                    }}
                  >
                    <span
                      style={{
                        color: "#677DA8",
                        fontSize: "1.9rem",
                        fontWeight: "700",
                        fontFamily: "sans-serif",
                      }}
                    >
                      4.3
                    </span>
                    <Stars times={5}>
                      <StarIcon sx={{ color: "#A61473", fontSize: "2rem" }} />
                    </Stars>
                  </Typography>
                  <Typography
                    textAlign="center"
                    sx={{ color: "#677DA8", fontSize: "0.8rem" }}
                  >
                    (11.6k Total Review)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "0px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${Nike1})`,
                width: "30rem",
                height: "30rem",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{ backgroundImage: `url(${Shadow})` }}
              className="shadowCircle"
            ></Box>

            <Box className="offerBox">
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "#677DA8",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                Get Up to 30% Off
              </Typography>
              <Typography
                sx={{
                  color: "#677DA8",
                  fontSize: "0.8rem",
                }}
              >
                You can get 30% off this product if you are buying now
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Products Box */}
    </Box>
  );
}

export default DetailBox;
