import { Container } from "@mui/material";
import React from "react";
import DetailBox from "./DetailBox";
import Header from "./header";
import Products from "./Products";

function Homepage() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Header />
      <DetailBox />
      <Products />
    </Container>
  );
}

export default Homepage;
