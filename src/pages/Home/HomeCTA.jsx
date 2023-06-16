import { Button } from "flowbite-react";
import "./style.css";

export default function HomeCTA() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="txt-scnd mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                        Buktikan Kamu Bisa #SelangkahdiDepan Bersama EduGrow
                    </h1>
                    <p className="dark:text-gray-400 mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
                        Mulai belajar anti ribet. Berbagai macam jenis program
                        pembelajaran dengan materi-materi terupdate serta
                        berbagai macam Artikel menarik. Grow sekarang bersama
                        Edu Grow GRATIS!
                    </p>
                    <Button className="btn" size={"xl"}>
                        Mulai Ikuti Kelas
                    </Button>
                </div>
                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                    <img src="/images/home-heroCTA.png" alt="mockup" />
                </div>
            </div>
        </section>
    );
}
