import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
// import KelasPage from "../pages/KelasPage/KelasPage";
import GrowProgram from "../pages/GrowProgram/GrowProgram";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="growProgram" element={<GrowProgram/>} />

            {/* <Route path="kelas" element={<KelasPage />} /> */}
        </Routes>
    );
}
