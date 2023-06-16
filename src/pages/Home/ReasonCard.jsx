import { Card } from "flowbite-react";
import "./home.style.css";
import { Col, Container, Row } from "../../components/core/Grid";

export default function ReasonCard() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <section className="dark:bg-gray-900 bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-2">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                        <div className="flex flex-col items-center justify-center lg:col-span-12">
                            <h1 className="txt-scnd mb-4 text-center text-5xl font-extrabold">
                                Kenapa Pilih EduGrow
                            </h1>
                            <p className="text-center text-base font-normal text-gray-500">
                                Kami sadar bahwa kamu punya potensi besar untuk
                                menjadi talenta digital lewat pendidikan yang
                                berkualitas dan terintegrasi dengan kebutuhan
                                industri
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Container>
                <Row>
                    <Col>
                        <div className="mx-auto py-4">
                            <div className="flex h-80 flex-col md:flex-row md:space-x-5">
                                {/* Card 1 Mudah */}
                                <Card className="flex">
                                    <div className="image-container justify-start">
                                        <img
                                            className="card-image"
                                            src="/images/card-home-sun.png"
                                            alt="Satriyo Witjaksono"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                            Mudah
                                        </h5>
                                        <p className="dark:text-gray-400 font-normal text-gray-700">
                                            Kemampuan kamu masih nol? Tenang,
                                            kamu akan mendapat skill yang akan
                                            dibimbing oleh para ahli yang sudah
                                            berpengalaman di bidangnya sampai
                                            bisa.
                                        </p>
                                    </div>
                                </Card>

                                {/* Card 2 Sertifikat */}
                                <Card className="flex">
                                    <div className="image-container justify-start">
                                        <img
                                            className="card-image"
                                            src="/images/card-home-sertif.png"
                                            alt="Satriyo Witjaksono"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                            Sertifikat
                                        </h5>
                                        <p className="dark:text-gray-400 font-normal text-gray-700">
                                            Setelah lulus belajar, kamu akan
                                            mendapat sertifikat kelulusan
                                            sebagai bukti eligtabilitas yang
                                            bisa kamu gunakan untuk mempermudah
                                            mendapat pekerjaan.
                                        </p>
                                    </div>
                                </Card>

                                {/* Card 3 Experience */}
                                <Card className="flex">
                                    <div className="image-container justify-start">
                                        <img
                                            className="card-image"
                                            src="/images/card-home-exp.png"
                                            alt="Satriyo Witjaksono"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                            Experience
                                        </h5>
                                        <p className="dark:text-gray-400 font-normal text-gray-700">
                                            Selama mengikuti program EduGrow,
                                            kamu akan mendapat pengalaman yang
                                            bisa bermanfaat untuk meningkatkan
                                            hard skill maupun soft skill kamu.
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
