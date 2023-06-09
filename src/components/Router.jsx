import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import KelasDetail from "../pages/KelasPage/KelasDetail";
import GrowProgram from "../pages/GrowProgram/GrowProgram";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kelas/:slug" element={<KelasDetail />} />
            <Route path="/grow-program" element={<GrowProgram />} />
        </Routes>
    );
}
