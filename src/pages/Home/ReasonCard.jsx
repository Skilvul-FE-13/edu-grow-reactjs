import { Card } from "flowbite-react";
import "./style.css";

export default function ReasonCard() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {/* Card 1 Mudah */}
                    <Card className="size-card flex items-start ">
                        <div className="image-container">
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
                                Kemampuan kamu masih nol? Tenang, kamu akan
                                mendapat skill yang akan dibimbing oleh para
                                ahli yang sudah berpengalaman di bidangnya
                                sampai bisa.
                            </p>
                        </div>
                    </Card>

                    {/* Card 2 Sertifikat */}
                    <Card className="size-card flex items-start text-center">
                        <div className="image-container">
                            <img
                                className="card-image justify-items-start"
                                src="/images/card-home-sertif.png"
                                alt="Satriyo Witjaksono"
                            />
                        </div>
                        <div className="text-left">
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                Sertifikat
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                Setelah lulus belajar, kamu akan mendapat
                                sertifikat kelulusan sebagai bukti eligtabilitas
                                yang bisa kamu gunakan untuk mempermudah
                                mendapat pekerjaan.
                            </p>
                        </div>
                    </Card>

                    {/* Card 3 Experience */}
                    <Card className="size-card flex items-start text-center">
                        <div className="image-container">
                            <img
                                className="card-image justify-items-start"
                                src="/images/card-home-exp.png"
                                alt="Satriyo Witjaksono"
                            />
                        </div>
                        <div className="text-left">
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                Experience
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                Selama mengikuti program EduGrow, kamu akan
                                mendapat pengalaman yang bisa bermanfaat untuk
                                meningkatkan hard skill maupun soft skill kamu.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
