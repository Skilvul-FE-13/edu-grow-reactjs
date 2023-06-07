import { Fragment } from "react";
import Router from "./components/Router";
import NavbarComponent from "./components/Layout/NavbarComponent/NavbarComponent";
import FooterComponent from "./components/Layout/FooterComponent/FooterComponent";

export default function App() {
    return (
        <Fragment>
            <NavbarComponent />
            <Router />
            <FooterComponent />
        </Fragment>
    );
}
