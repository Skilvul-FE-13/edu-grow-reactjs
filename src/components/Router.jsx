import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Kelas from "../pages/KelasPage/KelasPage";
import KelasDetail from "../pages/KelasPage/KelasDetail";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kelas" element={<Kelas />} />
            <Route path="/kelas/:slug" element={<KelasDetail />} />
        </Routes>
    );
}
