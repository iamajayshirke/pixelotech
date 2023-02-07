import { Box, Container } from "@mui/system";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header/>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <p>Pixelotech Assignment</p>
        </Box>
      </Container>
    </div>
  );
}

export default App;
