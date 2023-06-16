"use client";

import { Accordion } from "flowbite-react";

export default function CollapseAll() {
    return (
        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title>What is Flowbite?</Accordion.Title>
                <Accordion.Content>
                    <p className="dark:text-gray-400 mb-2 text-gray-500">
                        <p>
                            Flowbite is an open-source library of interactive
                            components built on top of Tailwind CSS including
                            buttons, dropdowns, modals, navbars, and more.
                        </p>
                    </p>
                    <p className="dark:text-gray-400 text-gray-500">
                        <p>Check out this guide to learn</p>
                        <a
                            className="dark:text-cyan-500 text-cyan-600 hover:underline"
                            href="https://flowbite.com/docs/getting-started/introduction/"
                        >
                            <p>get started</p>
                        </a>
                        <p>
                            and start developing websites even faster with
                            components on top of Tailwind CSS.
                        </p>
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Is there a Figma file available?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="dark:text-gray-400 mb-2 text-gray-500">
                        <p>
                            Flowbite is first conceptualized and designed using
                            the Figma software so everything you see in the
                            library has a design equivalent in our Figma file.
                        </p>
                    </p>
                    <p className="dark:text-gray-400 text-gray-500">
                        <p>Check out the</p>
                        <a
                            className="dark:text-cyan-500 text-cyan-600 hover:underline"
                            href="https://flowbite.com/figma/"
                        >
                            <p>Figma design system</p>
                        </a>
                        <p>
                            based on the utility classes from Tailwind CSS and
                            components from Flowbite.
                        </p>
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    What are the differences between Flowbite and Tailwind UI?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="dark:text-gray-400 mb-2 text-gray-500">
                        <p>
                            The main difference is that the core components from
                            Flowbite are open source under the MIT license,
                            whereas Tailwind UI is a paid product. Another
                            difference is that Flowbite relies on smaller and
                            standalone components, whereas Tailwind UI offers
                            sections of pages.
                        </p>
                    </p>
                    <p className="dark:text-gray-400 mb-2 text-gray-500">
                        <p>
                            However, we actually recommend using both Flowbite,
                            Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of
                            two worlds.
                        </p>
                    </p>
                    <p className="dark:text-gray-400 mb-2 text-gray-500">
                        Learn more about these technologies:
                    </p>
                    <ul className="dark:text-gray-400 list-disc pl-5 text-gray-500">
                        <li>
                            <a
                                className="dark:text-cyan-500 text-cyan-600 hover:underline"
                                href="https://flowbite.com/pro/"
                            >
                                <p>Flowbite Pro</p>
                            </a>
                        </li>
                        <li>
                            <a
                                className="dark:text-cyan-500 text-cyan-600 hover:underline"
                                href="https://tailwindui.com/"
                                rel="nofollow"
                            >
                                <p>Tailwind UI</p>
                            </a>
                        </li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
