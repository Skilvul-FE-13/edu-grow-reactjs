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
            <br></br>
            <br></br>

            <section className="dark:bg-gray-900 space-y-0 bg-white">
                <div className="container">
                    {/* CARD TIM */}
                    <div className="flex flex-row gap-4 text-center">
                        {/* CARD SATRIYO */}
                        <Card
                            className=""
                            imgAlt="Satriyo Witjaksono"
                            imgSrc="/images/Satriyo-img.png"
                        >
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                <p>Satriyo Witjaksono</p>
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                <p>
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                            </p>
                            <div className="flex flex-row place-content-center gap-4">
                                <img src="/public/images/Social icon-twitter.svg" />
                                <img src="/public/images/Social icon-linkedin.svg" />
                                <img src="/public/images/Social icon-github.svg" />
                            </div>
                        </Card>
                        {/* CARD NANDA */}
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="/images/nanda-img.png"
                        >
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                <p>Nanda Satria Putra</p>
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                <p>
                                    Here are the biggest enterprise technology
                                    acquisitions of 2022 so far, in reverse
                                    chronological order.
                                </p>
                            </p>
                            <div className="flex flex-row place-content-center gap-4">
                                <img src="/public/images/Social icon-twitter.svg" />
                                <img src="/public/images/Social icon-linkedin.svg" />
                                <img src="/public/images/Social icon-github.svg" />
                            </div>
                        </Card>
                    </div>
                    <br></br>
                    <div className="flex flex-row gap-4 text-center">
                        {/* CARD DANIEL */}
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="/images/daniel-img.png"
                        >
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                <p>Daniel Ryan Simatupang</p>
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                <p>
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                            </p>
                            <div className="flex flex-row place-content-center gap-4">
                                <img src="/public/images/Social icon-twitter.svg" />
                                <img src="/public/images/Social icon-linkedin.svg" />
                                <img src="/public/images/Social icon-github.svg" />
                            </div>
                        </Card>
                        {/* CARD MAYA */}
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="/images/maya-img.png"
                        >
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                <p>Maya Aulia Dwi Nur Cahyani</p>
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                <p>
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                            </p>
                            <div className="flex flex-row place-content-center gap-4">
                                <img src="/public/images/Social icon-twitter.svg" />
                                <img src="/public/images/Social icon-linkedin.svg" />
                                <img src="/public/images/Social icon-github.svg" />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </section>
    );
}
