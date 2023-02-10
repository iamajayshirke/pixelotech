import "./App.css";
import Dashboards from "./components/Dashboard/Dashboards";
import Homepage from "./components/Homepage";
import Err from "./components/Pagenotfound";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Routes>
        <Route index path="/"  exact element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboards />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Err />} />
      </Routes>
    </div>
  );
}

export default App;

// const Root = () => {
//   return (
//     <>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/">Contact</Link>
//         <Link to="/loginpage">LoginPage</Link>
//       </div>
//     </>
//   );
// };
