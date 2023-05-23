import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Layouts/Login/Login.jsx";
import Dashboard from "./Layouts/Dashboard/Dashboard.jsx";
import Register from "./Layouts/Register/Register.jsx";
import CircleDial from "./Layouts/CircleDial/CircleDial.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vongquaymayman" element={<CircleDial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
