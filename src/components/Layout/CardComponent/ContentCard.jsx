"use client";

import { Accordion } from "flowbite-react";

export default function ContentCard() {
    return (
        <Accordion collapseAll className="bg-white">
            <Accordion.Panel>
                <Accordion.Title>Intro UI/UX</Accordion.Title>
                <Accordion.Content>
                    <p className="dark:text-gray-400 mb-2 text-black">
                        <div className="flex justify-between">
                            <div className="videos flex gap-2">
                                <div className="h-[30px] w-[30px] rounded-full border-2 bg-white pl-[2px] pt-[2px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-1 font-semibold">
                                    Project overview, pengenalan UI/UX...
                                </p>
                            </div>
                            <p className="font-semibold">1:00</p>
                        </div>
                    </p>
                    <p className="dark:text-gray-400 mt-4 text-black">
                        <div className="flex justify-between">
                            <div className="videos flex gap-2">
                                <div className="h-[30px] w-[30px] rounded-full border-2 bg-white pl-[2px] pt-[2px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-1 font-semibold">
                                    Menentukan Tema Design
                                </p>
                            </div>
                            <p className="font-semibold">3:00</p>
                        </div>
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Praktik UI/UX</Accordion.Title>
                <Accordion.Content>
                    <p className="dark:text-gray-400 mb-2 text-black">
                        <div className="flex justify-between">
                            <div className="videos flex gap-2">
                                <div className="h-[30px] w-[30px] rounded-full border-2 bg-white pl-[2px] pt-[2px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-1 font-semibold">User Flow</p>
                            </div>
                            <p className="font-semibold">2:00</p>
                        </div>
                    </p>
                    <p className="dark:text-gray-400 mt-4 text-black">
                        <div className="flex justify-between">
                            <div className="videos flex gap-2">
                                <div className="h-[30px] w-[30px] rounded-full border-2 bg-white pl-[2px] pt-[2px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-1 font-semibold">Wireframe</p>
                            </div>
                            <p className="font-semibold">10:00</p>
                        </div>
                    </p>
                    <p className="dark:text-gray-400 mt-4 text-black">
                        <div className="flex justify-between">
                            <div className="videos flex gap-2">
                                <div className="h-[30px] w-[30px] rounded-full border-2 bg-white pl-[2px] pt-[2px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-1 font-semibold">UI Desain</p>
                            </div>
                            <p className="font-semibold">15:00</p>
                        </div>
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Closing UI/UX</Accordion.Title>
                <Accordion.Content>
                    <p className="dark:text-gray-400 mt-4 text-black">
                        <div className="flex justify-between">
                            <div className="videos flex gap-2">
                                <div className="h-[30px] w-[30px] rounded-full border-2 bg-white pl-[2px] pt-[2px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-1 font-semibold">
                                    Prototyping
                                </p>
                            </div>
                            <p className="font-semibold">10:00</p>
                        </div>
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
