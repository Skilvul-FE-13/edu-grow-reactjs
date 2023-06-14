import { Button, Card } from "flowbite-react";
import "./styleDescKelas.css";
import { Container, Row, Col } from "../../components/core/Grid";

export default function KontenKelas() {
    return (
        <Container>
            <Row className="py-16">
                <Col className="w-full text-justify md:order-2 md:w-1/2 md:flex-1">
                    <h1 className="pb-4 text-xl font-semibold text-blue-900">
                        Deskripsi Kelas
                    </h1>
                    <p className="leading-relaxed">
                        NFT adalah produk investasi turunan kripto yang
                        memungkin kreator digital untuk menjual aset digitalnya.
                        Pada kelas kali ini, kita akan membuat design
                        marketplace NFT Website menggunakan Figma. Menarik
                        bukan? Bersama mentor Cynthia, kita akan membuat sebuah
                        website NFT dari mulai wireframing, high fidelity,
                        hingga prototypingnya. Ini akan menjadi kesempatan yang
                        bagus untuk upgrade skill dan membuat portofolio sesuai
                        dengan tren saat ini. Materi yang akan diajarkan pun
                        terbilang lengkap karena kita akan mempelajari cara
                        membuat UI Style Guide sederhana, serta berbagai fitur
                        yang ada di Figma seperti Auto Layout dan Layout Grid
                    </p>

                    <h1 className="pb-4 pt-8 text-xl font-semibold text-blue-900">
                        Point Utama
                    </h1>
                    <div className="flex flex-col gap-8 pb-4">
                        <div className="flex gap-8">
                            <img src="/images/check.png" alt="check" />
                            <p>Mengenal tools Whimsical dan Figma</p>
                        </div>
                        <div className="flex gap-8">
                            <img src="/images/check.png" alt="check" />
                            <p>
                                Belajar mengeai style guide, layout grid dan
                                auto layout di Figma
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <img src="/images/check.png" alt="check" />
                            <p>Mengetahui langkah-langkah membuat UI design</p>
                        </div>
                        <div className="flex gap-8">
                            <img src="/images/check.png" alt="check" />
                            <p>Praktek membuat UI design Website</p>
                        </div>
                    </div>
                </Col>
                <Col className="w-full md:order-1 md:w-1/2">
                    <h1 className="pb-4 text-xl font-semibold text-blue-900">
                        Tools Pendukung
                    </h1>
                    <div className="flex flex-col gap-12 md:flex-row">
                        <Card className="max-w-xs">
                            <img src="/images/Figma-logo.png" alt="Figma" />
                            <h1 className="dark:text-gray-400 text-2xl font-semibold text-gray-700">
                                Figma
                            </h1>
                            <p className="text-base text-gray-700">
                                Software Gratis
                            </p>
                            <Button className="btn-downl font-semibold">
                                Download Now
                            </Button>
                        </Card>
                        <Card className="max-w-xs">
                            <img src="/images/Whimsical.png" alt="Whimsical" />
                            <h1 className="dark:text-gray-400 text-2xl font-semibold text-gray-700">
                                Whimsical
                            </h1>
                            <p className="text-base text-gray-700">
                                Software Gratis
                            </p>
                            <Button className="btn-downl font-semibold">
                                Download Now
                            </Button>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
