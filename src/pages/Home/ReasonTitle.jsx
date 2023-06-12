import "./style.css";

export default function ReasonTitle() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-2">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                    <div className="flex flex-col items-center justify-center lg:col-span-12">
                        <h3 className="txt-prmy-color text-center text-4xl font-extrabold">
                            Hallo Kenalan Yuk
                        </h3>
                        <h1 className="txt-scnd text-center text-5xl font-extrabold">
                            Tim Kami
                        </h1>
                        <p className="text-center text-base font-normal text-gray-500">
                            EduGrow diisi oleh berbagai macam orang dengan
                            berbagai macam latarbelakang dan keahlian dibidang
                            masing-masing. Kami terbuka untuk berbagai macam
                            talenta agar terus berkembang bersama kami.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
