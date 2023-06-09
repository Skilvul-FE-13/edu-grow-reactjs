import "./styleAbout.css";
import { Card } from "flowbite-react";

export default function CardTim() {
    return (
        <section className="dark:bg-gray-900 space-y-0 bg-white">
            <div className="py-34 lg:py-34 mx-auto grid max-w-screen-xl gap-4 px-4 lg:grid-cols-2 xl:gap-6">
                {/* Card 1 Satriyo */}
                <Card className="size-card text-center">
                    <div className="image-container">
                        <img
                            className="card-image"
                            src="/images/Satriyo-img.png"
                            alt="Satriyo Witjaksono"
                        />
                    </div>
                    <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                        <p>Satriyo Witjaksono</p>
                    </h5>
                    <h5 className="txt-prmy-color text-base font-normal tracking-tight">
                        <p>Developer</p>
                    </h5>
                    <p className="dark:text-gray-400 font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <div className="flex flex-row justify-center gap-4">
                        <img src="/public/images/Social icon-twitter.svg" />
                        <img src="/public/images/Social icon-linkedin.svg" />
                        <img src="/public/images/Social icon-github.svg" />
                    </div>
                </Card>

                {/* Card 2 Nanda */}
                <Card className="size-card text-center">
                    <div className="image-container">
                        <img
                            className="card-image"
                            src="/images/nanda-img.png"
                            alt="Nanda Satria Putra"
                        />
                    </div>
                    <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                        <p>Nanda Satria Putra</p>
                    </h5>
                    <h5 className="txt-prmy-color text-base font-normal tracking-tight">
                        <p>Developer</p>
                    </h5>
                    <p className="dark:text-gray-400 font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <div className="flex flex-row justify-center gap-4">
                        <img src="/public/images/Social icon-twitter.svg" />
                        <img src="/public/images/Social icon-linkedin.svg" />
                        <img src="/public/images/Social icon-github.svg" />
                    </div>
                </Card>

                {/* Card 3 Daniel */}
                <Card className="size-card text-center">
                    <div className="image-container">
                        <img
                            className="card-image"
                            src="/images/daniel-img.png"
                            alt="Daniel Ryan Simatupang"
                        />
                    </div>
                    <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                        <p>Daniel Ryan Simatupang</p>
                    </h5>
                    <h5 className="txt-prmy-color text-base font-normal tracking-tight">
                        <p>Developer</p>
                    </h5>
                    <p className="dark:text-gray-400 font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <div className="flex flex-row justify-center gap-4">
                        <img src="/public/images/Social icon-twitter.svg" />
                        <img src="/public/images/Social icon-linkedin.svg" />
                        <img src="/public/images/Social icon-github.svg" />
                    </div>
                </Card>

                {/* Card 4 Maya */}
                <Card className="size-card text-center">
                    <div className="image-container">
                        <img
                            className="card-image"
                            src="/images/maya-img.png"
                            alt="Maya Aulia Dwi Nur Cahyani"
                        />
                    </div>
                    <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                        <p>Maya Aulia Dwi Nur Cahyani</p>
                    </h5>
                    <h5 className="txt-prmy-color text-base font-normal tracking-tight">
                        <p>Developer</p>
                    </h5>
                    <p className="dark:text-gray-400 font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <div className="flex flex-row justify-center gap-4">
                        <img src="/public/images/Social icon-twitter.svg" />
                        <img src="/public/images/Social icon-linkedin.svg" />
                        <img src="/public/images/Social icon-github.svg" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
