import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function ToolsCard() {
  return (
   <>
   <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Tools Pendukung
                                    </h1>
                                    <div className="flex flex-col gap-4 md:flex-row max-sm:pl-12">
                        <Card className="w-[255px] h-[348px] ">
                            <img className="h-[93px] w-[93px] object-left-top" src="/images/Figma-logo.png" alt="Figma" />
                            <h1 className="dark:text-gray-400 text-2xl font-semibold text-gray-700">
                                Figma
                            </h1>
                            <p className="text-base text-gray-700">
                                Software Gratis
                            </p>
                            <Link
                                to='https://www.figma.com/downloads/'
                                className="mt-6 w-[200px]
                                h-[69px] rounded-md text-[#3A5088] py-6 text-center text-sm font-semibold bg-white outline focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Download Now
                            </Link>
                        </Card>
                        <Card className="w-[255px] h-[348px] ">
                            <img className="h-[93px] w-[93px] object-left-top" src="/images/Whimsical.png" alt="Figma" />
                            <h1 className="dark:text-gray-400 text-2xl font-semibold text-gray-700">
                                Whimsical
                            </h1>
                            <p className="text-base text-gray-700">
                                Software Gratis
                            </p>
                            <Link
                                to='https://whimsical.com/'
                                className="mt-6 w-[200px]
                                h-[69px] rounded-md text-[#3A5088] py-6 text-center text-sm font-semibold bg-white outline focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Download Now
                            </Link>
                        </Card>
                    </div>
   </>
  )
}


