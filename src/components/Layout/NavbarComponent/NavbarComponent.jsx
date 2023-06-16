/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import "./style.css";
import { Container } from "../../core/Grid";
import { AuthContext } from "../../../utils/Auth";

const NavbarComponent = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("rememberMe");
        setIsLoggedIn(false);

        navigate("/login");
    };

    const handleButtonClick = () => {
        if (isLoggedIn) {
            handleLogout();
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="nav">
            <Container>
                <Navbar className="navbar" fluid>
                    <Navbar.Brand href="/">
                        <img
                            alt="Edu React Logo"
                            className="my-2 h-10"
                            src="/icons/logo-edu.svg"
                        />
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Button
                            href={isLoggedIn ? "/" : "/login"}
                            className="btn-login"
                            onClick={handleButtonClick}
                        >
                            {isLoggedIn ? "Keluar" : "Masuk"}
                        </Button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link active href="/">
                            <p>Home</p>
                        </Navbar.Link>
                        <Navbar.Link href="/grow-program">
                            Grow Program
                        </Navbar.Link>
                        <Navbar.Link href="/about">About</Navbar.Link>
                        {/* <Navbar.Link href="/kelas-online">
                            Kelas Online
                        </Navbar.Link> */}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavbarComponent;
