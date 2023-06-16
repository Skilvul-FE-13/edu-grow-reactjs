import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import "./home.style.css";

export default function NewArtikel() {
    return (
        <section className="dark:bg-gray-900 bg-white py-10">
            <section className="dark:bg-gray-900 bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-2">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
                        <div className="flex flex-col items-center justify-center lg:col-span-12">
                            <h1 className="txt-prmy mb-4 text-center text-5xl font-extrabold">
                                Artikel Pilihan Kami
                            </h1>
                            <p className="text-center text-base font-normal text-gray-500">
                                Biar otak gak tegang, kami hadirkan bacaan yang
                                asyik, menarik dan penuh insights!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-between px-4 py-2 sm:px-8 md:px-12 lg:flex-row lg:px-20">
                <Button outline pill className="mb-4 lg:mb-0 lg:mr-2">
                    <HiOutlineArrowLeft className="h-6 w-6" />
                </Button>
                <section className="dark:bg-gray-900 mx-2 bg-white">
                    <div className="mx-auto grid max-w-screen-xl py-2 lg:grid-cols-12 lg:gap-8 lg:py-2 xl:gap-0">
                        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                            <img
                                src="/images/artikel-pilihan.png"
                                alt="mockup"
                            />
                        </div>
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="txt-scnd mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight">
                                Mengenal Pentingnya Kesehatan Mental Pada Remaja
                            </h1>
                            <p className="dark:text-gray-400 mb-6 text-xl font-light text-gray-500">
                                Kesehatan mental dipengaruhi oleh peristiwa
                                dalam kehidupan yang meninggalkan dampak yang
                                besar pada kepribadian dan perilaku seseorang.
                            </p>
                            <Button className="btn" size={"xl"}>
                                Baca Selengkapnya
                            </Button>
                        </div>
                    </div>
                </section>
                <Button outline pill className="ml-2">
                    <HiOutlineArrowRight className="h-6 w-6" />
                </Button>
            </div>
        </section>
    );
}
