import { Button } from "flowbite-react";
import "./style.css";

export default function HomeKeuntungan() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <div className="container mx-auto px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                    <img src="/images/keuntungan-home.png" alt="mockup" />
                </div>
                <div className="col-span-12 flex flex-col items-center justify-center lg:col-span-7 lg:items-start">
                    <h1 className="txt-prmy text-2xl font-semibold">
                        You Deserve Better Career
                    </h1>
                    <h1 className="dark:text-white mb-4 text-5xl font-extrabold leading-none leading-tight tracking-tight">
                        Keuntungan Yang Kamu Dapatkan Untuk Tumbuh
                    </h1>
                    <section className="flex flex-col gap-4">
                        <div className="flex flex-row">
                            <img src="/icons/ceklis-icon.svg" alt="ceklis" />
                            <p className="dark:text-white">
                                Akses Kelas Selamanya
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <img src="/icons/ceklis-icon.svg" alt="ceklis" />
                            <p className="dark:text-white">Free Matri Update</p>
                        </div>
                        <div className="flex flex-row">
                            <img src="/icons/ceklis-icon.svg" alt="ceklis" />
                            <p className="dark:text-white">
                                Study Case Project
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <img src="/icons/ceklis-icon.svg" alt="ceklis" />
                            <p className="dark:text-white">Forum Diskusi</p>
                        </div>
                        <div className="flex flex-row">
                            <img src="/icons/ceklis-icon.svg" alt="ceklis" />
                            <p className="dark:text-white">
                                Keuntungan Lainnya
                            </p>
                        </div>
                    </section>
                    <br />
                    <Button className="btn" size={"lg"}>
                        Ikuti Kelas
                    </Button>
                </div>
            </div>
        </section>
    );
}
