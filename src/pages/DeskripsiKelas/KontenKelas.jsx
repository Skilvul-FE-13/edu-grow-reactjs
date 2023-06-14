import { Button, Card } from "flowbite-react";
import "./styleDescKelas.css";
import { Container, Row, Col } from "../../components/core/Grid";

export default function KontenKelas() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="flex flex-col gap-8 md:flex-row md:gap-32">
                        <div className="md:w-1/2">
                            <h1 className="pb-4 pt-12 text-xl font-semibold text-blue-900">
                                Deskripsi Kelas
                            </h1>
                            <p className="text-justify leading-relaxed">
                                NFT adalah produk investasi turunan kripto yang
                                memungkin kreator digital untuk menjual aset
                                digitalnya. Pada kelas kali ini, kita akan
                                membuat design marketplace NFT Website
                                menggunakan Figma. Menarik bukan? Bersama mentor
                                Cynthia, kita akan membuat sebuah website NFT
                                dari mulai wireframing, high fidelity, hingga
                                prototypingnya. Ini akan menjadi kesempatan yang
                                bagus untuk upgrade skill dan membuat portofolio
                                sesuai dengan tren saat ini. Materi yang akan
                                diajarkan pun terbilang lengkap karena kita akan
                                mempelajari cara membuat UI Style Guide
                                sederhana, serta berbagai fitur yang ada di
                                Figma seperti Auto Layout dan Layout Grid.
                            </p>

                            <h1 className="pb-4 pt-12 text-xl font-semibold text-blue-900">
                                Point Utama
                            </h1>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-8">
                                    <img
                                        className="h-6 w-6"
                                        src="/images/check.png"
                                        alt="check"
                                    />
                                    <p>Mengenal tools Whimsical dan Figma</p>
                                </div>
                                <div className="flex gap-8">
                                    <img
                                        className="h-6 w-6"
                                        src="/images/check.png"
                                        alt="check"
                                    />
                                    <p>
                                        Belajar mengeai style guide, layout grid
                                        dan auto layout di Figma
                                    </p>
                                </div>
                                <div className="flex gap-8">
                                    <img
                                        className="h-6 w-6"
                                        src="/images/check.png"
                                        alt="check"
                                    />
                                    <p>
                                        Mengetahui langkah-langkah membuat UI
                                        design
                                    </p>
                                </div>
                                <div className="flex gap-8">
                                    <img
                                        className="h-6 w-6"
                                        src="/images/check.png"
                                        alt="check"
                                    />
                                    <p>Praktek membuat UI design Website</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="pb-4 pt-12 text-xl font-semibold text-blue-900">
                                Tools Pendukung
                            </h1>
                            <div className="flex flex-col gap-12 md:flex-row">
                                <Card className="w-full md:w-3/4">
                                    <img
                                        src="/images/Figma-logo.png"
                                        alt="Figma"
                                    />
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
                                <Card className="w-full md:w-3/4">
                                    <img
                                        src="/images/Whimsical.png"
                                        alt="Whimsical"
                                    />
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
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
