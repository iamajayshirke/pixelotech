import { Box, Container } from "@mui/system";
import "./App.css";
import DetailBox from "./components/DetailBox";
import Header from "./components/header";

function App() {
  return (
    <div className="App" >
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Header/>
        <DetailBox/>
        
      </Container>
    </div>
  );
}

export default App;
