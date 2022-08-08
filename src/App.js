import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Number from "./components/Number";
import Home from "./components/Home";

// const Home = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Home Component</h1>
//       <Link to={"/about"}>Go to about</Link>
//     </div>
//   );
// };
// const About = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "green" }}>About Component</h1>
//       <Link to={"/"}>Go to Home</Link>
//     </div>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:param" element={<Number />} />
          <Route path="/:param/:color/:bgc" element={<Number />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
