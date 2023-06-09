import "./styleAbout.css";
import { Card } from "flowbite-react";

export default function AboutTim() {
    return (
        <section className="dark:bg-gray-900 space-y-0 bg-white">
            <div className="dark:bg-gray-900 space-y-0 bg-white">
                <h3 className="txt-prmy-color text-center text-4xl font-extrabold">
                    Hallo Kenalan Yuk
                </h3>
                <h1 className="txt-scnd text-center text-5xl font-extrabold">
                    Tim Kami
                </h1>
                <p className="text-center text-base font-normal text-gray-500">
                    EduGrow diisi oleh berbagai macam orang dengan berbagai
                    macam latarbelakang dan keahlian dibidang masing-masing.
                    Kami terbuka untuk berbagai macam talenta agar terus
                    berkembang bersama kami.
                </p>
            </div>
        </section>
    );
}
