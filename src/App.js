import "./App.css";
// components
import Navbar from "./Components/Navbar";
import AllUser from "./Components/AllUser";
import AddUser from "./Components/AddUser";
import Home from "./Components/Home";
import EditUser from "./Components/EditUser";

import { BrowserRouter, Routes , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/all"  element={<AllUser />}  />
        <Route path="/add" element={<AddUser />}   />
        <Route path="/edit/:id" element={<EditUser />}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
