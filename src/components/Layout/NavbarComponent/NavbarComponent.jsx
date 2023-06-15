import { Button, Navbar } from "flowbite-react";
import "./style.css";
import { Container } from "../../core/Grid";

const NavbarComponent = () => {
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
                        <Button href="/login" className="btn-login">
                            Masuk
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
                        <Navbar.Link href="/kelas-online">
                            Kelas Online
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavbarComponent;
