import { Card } from "flowbite-react";
import "./style.css";

export default function ReasonCard() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {/* Card 1 Mudah */}
                    <Card className="size-card flex items-start text-center">
                        <div className="image-container">
                            <img
                                className="card-image"
                                src="/images/Satriyo-img.png"
                                alt="Satriyo Witjaksono"
                            />
                        </div>
                        <div className="text-left">
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                Mudah
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </div>
                    </Card>

                    {/* Card 2 Sertifikat */}
                    <Card className="size-card flex items-start text-center">
                        <div className="image-container">
                            <img
                                className="card-image"
                                src="/images/Satriyo-img.png"
                                alt="Satriyo Witjaksono"
                            />
                        </div>
                        <div className="text-left">
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                Sertifikat
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </div>
                    </Card>

                    {/* Card 3 Experience */}
                    <Card className="size-card flex items-start text-center">
                        <div className="image-container">
                            <img
                                className="card-image"
                                src="/images/Satriyo-img.png"
                                alt="Satriyo Witjaksono"
                            />
                        </div>
                        <div className="text-left">
                            <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                                Experience
                            </h5>
                            <p className="dark:text-gray-400 font-normal text-gray-700">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
