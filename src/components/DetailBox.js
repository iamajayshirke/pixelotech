import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import "./DetailBox.css";

function DetailBox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        disableGutters
        spacing={2}
        sx={{ padding: "20px 0px", height: "50vh" ,marginTop:'50px'}}
      >
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
          <Box sx={{display:'flex',flexDirection:'column',gap:"20px"}}>
            <Box sx={{ width: "80%" }}>
              {" "}
              <Typography
                sx={{
                  color: "#677DA8",
                  fontWeight: 900,
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
                sx={{ color: "#677DA8",fontSize:'0.8rem' }}
                component="body"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies
                tortor ac.
              </Typography>
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                <Box>Left</Box>
                <Box>Right</Box>
            </Box>
            Left Part
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
          <Box sx={{ width: "100%" }}>Right Part</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailBox;
