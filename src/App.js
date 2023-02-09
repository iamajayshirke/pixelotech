import { Box, Container } from "@mui/system";
import "./App.css";
import DetailBox from "./components/DetailBox";
import Header from "./components/header";
import Products from "./components/Products";

function App() {
  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Header/>
        <DetailBox/>
        <Products/>
        
      </Container>
      
    </div>
  );
}

export default App;
