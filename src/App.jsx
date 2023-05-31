import Navbar from "./components/Layout/Navbar/Navbar";
import Router from "./components/Router";

export default function App() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-8">
                <Router />
            </main>
        </>
    );
}
