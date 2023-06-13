import "./style.css";

export default function ReasonTitle() {
    return (
        <section className="dark:bg-gray-900 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-2">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                    <div className="flex flex-col items-center justify-center lg:col-span-12">
                        <h1 className="txt-scnd mb-4 text-center text-5xl font-extrabold">
                            Kenapa Pilih EduGrow
                        </h1>
                        <p className="text-center text-base font-normal text-gray-500">
                            Kami sadar bahwa kamu punya potensi besar untuk
                            menjadi talenta digital lewat pendidikan yang
                            berkualitas dan terintegrasi dengan kebutuhan
                            industri
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
