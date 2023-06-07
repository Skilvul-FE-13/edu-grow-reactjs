import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import GrowProgram from "../pages/GrowProgram/GrowProgram";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="growProgram" element={<GrowProgram/>} />
        </Routes>
    );
}
