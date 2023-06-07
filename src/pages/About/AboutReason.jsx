import "./styleAbout.css";

export default function AboutReason() {
    return (
        <section className="dark:bg-gray-900 space-y-0 bg-white">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 ">
                <div className="mr-auto lg:col-span-7">
                    <h1 className="txt-prmy-color mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight">
                        Kenapa Memilih Kami ?
                    </h1>
                    <br></br>
                    <h2 className="txt-prmy-color mb-4 max-w-2xl text-4xl font-semibold leading-none tracking-tight">
                        01. Mudah
                    </h2>
                    <p className="dark:text-gray-400 mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
                        EduGrow memberikan kamu kemudahan belajar dari para
                        ahlinya dimanapun dan kapanpun kamu mau.
                    </p>
                    <br></br>
                    <h2 className="txt-prmy-color mb-4 max-w-2xl text-4xl font-semibold leading-none tracking-tight">
                        02. Sertifikat
                    </h2>
                    <p className="dark:text-gray-400 mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
                        Setelah menyelesaikian pembelajaran kamu akan
                        mendapatkan sertifikat sebgai bukti kualifikasi kamu
                        yang akan berguna kedepannya.
                    </p>
                    <br></br>
                    <h2 className="txt-prmy-color mb-4 max-w-2xl text-4xl font-semibold leading-none tracking-tight">
                        03. Experience
                    </h2>
                    <p className="dark:text-gray-400 mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
                        Kamu akan mendapat banyak pengalaman untuk mengasan hard
                        sikll maupun soft skill untuk menambah kemampuan kamu.
                    </p>
                </div>
                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex ">
                    <img src="/images/Section-reason.png" alt="mockup" />
                </div>
            </div>
        </section>
    );
}
