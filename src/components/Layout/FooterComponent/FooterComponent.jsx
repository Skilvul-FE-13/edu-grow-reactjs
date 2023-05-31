import { Badge, Footer } from "flowbite-react";
import { Container } from "../../core/Grid";
import "./style.css";

const FooterComponent = () => {
    return (
        <Footer container>
            <Container>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                alt="Flowbite Logo"
                                href="/"
                                src="/icons/logo-edu.svg"
                            />
                            <p className="font my-4 max-w-xl">
                                EduGrow Adalah platform edukasi berbasi website
                                dengan tujuan untuk meningkatkan kualitas
                                pendidikan anak-anak penerus bangsa Indonesia.
                            </p>
                            <p className="font max-w-xl">
                                Jl. Gajah Duduk No.25/26, RT.47/RW.1, Raden
                                Saleh, Kec. Menteng, Kota Jakarta Pusat, Daerah
                                Khusus Ibukota Jakarta 10367
                            </p>
                            <p className="font max-w-xl">0851-5555-7589</p>
                            <p className="font max-w-xl">
                                customer@edugrow.com
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="Fitur" className="" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">
                                        Grow Program
                                    </Footer.Link>
                                    <Footer.Link href="#">Bantuan</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Ikuti Kami" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Facebook</Footer.Link>
                                    <Footer.Link href="#">
                                        instagram
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="EduGrow - All rights reserved"
                            href="#"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-2 sm:mt-0 sm:justify-center">
                            <Badge className="rounded-full py-2" color="gray">
                                <button>Privacy & Policy</button>
                            </Badge>
                            <Badge className="rounded-full py-2" color="gray">
                                <button>Terms</button>
                            </Badge>
                        </div>
                    </div>
                </div>
            </Container>
        </Footer>
    );
};

export default FooterComponent;
