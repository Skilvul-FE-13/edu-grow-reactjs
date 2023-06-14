import { Card } from "flowbite-react";
import "./style.css";

export default function TestimoniSection() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <section className="dark:bg-gray-900 bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-2">
                    <div className="flex flex-col items-center justify-center lg:col-span-12">
                        <h1 className="txt-prmy mb-4 text-center text-5xl font-extrabold">
                            Apa Kata Mereka ?
                        </h1>
                        <p className="text-center text-base font-normal text-gray-500">
                            Mereka sudah merasakan srunya belajar skill digital
                            dan meraih karir yang mereka inginkan kamu
                            selanjutnya ?
                        </p>
                    </div>
                </div>
            </section>
            <div className="mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {/* Card 1 */}
                    <Card className="size-card-testi flex flex-col">
                        <div className="image-container flex justify-between">
                            <img
                                className="card-image"
                                src="/icons/icon-kutip.svg"
                                alt="Muhammad Rendy Azri"
                            />
                        </div>
                        <div className="text-left lg:col-span-4">
                            <p className="txt-prmy font-semibold">
                                Pembelajaran di EduGrow
                            </p>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                memberikan pengalaman melatih skil yang berbeda.
                            </p>
                            <p className="txt-prmy font-semibold">Kurikulum</p>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                yang dirancang sesuai kebutuhan industri dan
                                lingkungan pembelajaran yang nyaman serta materi
                                yang selalu update membantu saya mendapat
                                pekerjaan yang layak. Thanks, EduGrow!~
                            </p>
                        </div>
                    </Card>

                    {/* Card 2 */}
                    <Card className="size-card-testi flex flex-col">
                        <div className="image-container flex justify-between">
                            <img
                                className="card-image justify-items-start"
                                src="/icons/icon-kutip.svg"
                                alt="Zaky Tri Nugroho"
                            />
                        </div>
                        <div className="text-left">
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                Kurikulum yang diberikan oleh edugrow sudah
                                sangat tepat,
                            </p>
                            <p className="txt-prmy font-semibold">
                                para student bisa dengan mudah mengikuti
                                kurikulum pembelajaran
                            </p>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                yang disediakan. Semua kebutuhan student mulai
                                dari sumber bacaan hingga berbagai macam artikel
                                untuk pengembangan diri sudah tersedia.
                            </p>
                        </div>
                    </Card>

                    {/* Card 3 */}
                    <Card className="size-card-testi flex flex-col">
                        <div className="image-container flex justify-between">
                            <img
                                className="card-image justify-items-start"
                                src="/icons/icon-kutip.svg"
                                alt="Nisrina Ayu Kamila Putri"
                            />
                        </div>
                        <div className="text-left">
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                Coures ini dibuat berdasarkan pengalaman di
                                industri, sehingga
                            </p>
                            <p className="txt-prmy font-semibold">
                                benar-benar merepresen-tasikan
                            </p>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                bagaimana cara kerja seoarang UX Designer.
                                Semoga course ini dapat menjadi panduan bagi
                                teman-teman yang tertarol dengan dunia UI/UX
                                Design.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
