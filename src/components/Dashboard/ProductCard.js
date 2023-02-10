import React from "react";
import Box from "@mui/material/Box";
import "./productcard.css";
import { Typography, Button } from "@mui/material";

function ProductCard(props) {
  console.log(props)
  return (
    <Box sx={{ backgroundColor: "#FAFBFC", borderRadius: "10px" ,mt:1,mb:1}}>
      <Box className="productCard">
        <img
          src={props.img}
          style={{
            height: "9rem",
            width: "13rem",
            objectFit: "contain",
          }}
        />
        <Box className="flexColumn">
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.7rem", color: "#6B7A99" }}
          >
            Apple Air Pods 2
          </Typography>
          <Button
            variant="text"
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: " 0px 2px 5px rgba(38, 51, 77, 0.03)",
              borderRadius: "15px",
            }}
          >
            <Typography
              sx={{ fontWeight: 700, fontSize: "0.6rem", color: "#6B7A99" }}
            >
              $500
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
