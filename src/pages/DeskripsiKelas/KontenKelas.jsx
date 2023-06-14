import { Button, Card } from "flowbite-react";
import "./styleDescKelas.css";

export default function KontenKelas() {
    return (
        <section className="pb-16 pl-28 pr-8 pt-16">
            <div class="flex space-x-40">
                <div class="w-64 flex-1 text-justify">
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
                    <div className="flex gap-8 pb-4">
                        <img src="/images/check.png" />
                        <p>Mengenal tools Whimsical dan Figma</p>
                    </div>
                    <div className="flex gap-8 pb-4">
                        <img src="/images/check.png" />
                        <p>
                            Belajar mengeai style guide, layout grid dan auto
                            layout di Figma
                        </p>
                    </div>
                    <div className="flex gap-8 pb-4">
                        <img src="/images/check.png" />
                        <p>Mengetahui langkah-langkah membuat UI design</p>
                    </div>
                    <div className="flex gap-8 pb-4">
                        <img src="/images/check.png" />
                        <p>Praktek membuat UI design Website</p>
                    </div>
                </div>
                <div className="w-64 flex-1">
                    <h1 className="pb-4 text-xl font-semibold text-blue-900">
                        Tools Pendukung
                    </h1>
                    <div className="flex gap-12">
                        <Card className="max-w-xs">
                            <img src="/images/Figma-logo.png" />
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
                            <img src="/images/Whimsical.png" />
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
        </section>
    );
}
