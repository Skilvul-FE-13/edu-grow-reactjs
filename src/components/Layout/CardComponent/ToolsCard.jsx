import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ToolsCard() {
    return (
        <>
            <h1 className="sub-title my-10 text-2xl font-semibold">
                Tools Pendukung
            </h1>
            <div className="flex flex-col gap-4 max-sm:pl-12 md:flex-row">
                <Card className="h-[348px] w-[255px] ">
                    <img
                        className="h-[93px] w-[93px] object-left-top"
                        src="/images/Figma-logo.png"
                        alt="Figma"
                    />
                    <h1 className="dark:text-gray-400 text-2xl font-semibold text-gray-700">
                        Figma
                    </h1>
                    <p className="text-base text-gray-700">Software Gratis</p>
                    <Link
                        to="https://www.figma.com/downloads/"
                        className="dark:bg-cyan-600 dark:hover:bg-cyan-700
                                dark:focus:ring-cyan-800 mt-6 h-[69px] w-[200px] rounded-md bg-white py-6 text-center text-sm font-semibold text-[#3A5088] outline focus:outline-none focus:ring-4 focus:ring-cyan-300"
                    >
                        Download Now
                    </Link>
                </Card>
                <Card className="h-[348px] w-[255px] ">
                    <img
                        className="h-[93px] w-[93px] object-left-top"
                        src="/images/Whimsical.png"
                        alt="Figma"
                    />
                    <h1 className="dark:text-gray-400 text-2xl font-semibold text-gray-700">
                        Whimsical
                    </h1>
                    <p className="text-base text-gray-700">Software Gratis</p>
                    <Link
                        to="https://whimsical.com/"
                        className="dark:bg-cyan-600 dark:hover:bg-cyan-700
                                dark:focus:ring-cyan-800 mt-6 h-[69px] w-[200px] rounded-md bg-white py-6 text-center text-sm font-semibold text-[#3A5088] outline focus:outline-none focus:ring-4 focus:ring-cyan-300"
                    >
                        Download Now
                    </Link>
                </Card>
            </div>
        </>
    );
}
