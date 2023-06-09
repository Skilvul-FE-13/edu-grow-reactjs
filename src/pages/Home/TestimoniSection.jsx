import { Card } from "flowbite-react";
import "./home.style.css";

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
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="/images/profil-testi-1.png"
                                alt="Profil testimoni 1"
                            />
                            <div className="flex flex-col">
                                <h1 className="txt-scnd font-semibold ">
                                    Muhammad Rendy Azri{" "}
                                </h1>
                                <p className="text-gray-500">UI/UX Designer</p>
                                <p className="text-gray-500">
                                    UI Designer at bank BCA
                                </p>
                            </div>
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
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="/images/profil-testi-2.png"
                                alt="Profil testimoni 2"
                            />
                            <div className="flex flex-col">
                                <h1 className="txt-scnd font-semibold ">
                                    Zaky Tri Nugroho
                                </h1>
                                <p className="text-gray-500">Full stack web</p>
                                <p className="text-gray-500">
                                    Senior Software Enginer at bank Mandiri
                                </p>
                            </div>
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
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="/images/profil-testi-3.png"
                                alt="Profil testimoni 3"
                            />
                            <div className="flex flex-col">
                                <h1 className="txt-scnd font-semibold ">
                                    Muhammad Rendy Azri{" "}
                                </h1>
                                <p className="text-gray-500">UI/UX Designer</p>
                                <p className="text-gray-500">
                                    UX Designer at Google
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
