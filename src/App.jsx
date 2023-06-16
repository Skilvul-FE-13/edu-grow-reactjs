import { Fragment } from "react";
import Router from "./components/Router";
import NavbarComponent from "./components/Layout/NavbarComponent/NavbarComponent";
import FooterComponent from "./components/Layout/FooterComponent/FooterComponent";
import { AuthProvider } from "./utils/Auth";

export default function App() {
    return (
        <Fragment>
            <AuthProvider>
                <NavbarComponent />
                <Router />
                <FooterComponent />
            </AuthProvider>
        </Fragment>
    );
}
