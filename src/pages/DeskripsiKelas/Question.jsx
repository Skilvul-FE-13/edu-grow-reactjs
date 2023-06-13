import "./styleDescKelas.css";

export default function DeskripsiKelasCTA() {
    return (
        <section className="g-stone-50 pb-20 pt-20">
            <div className="text-center">
                <h3 className="text-base font-medium">Mari Bertanya!</h3>
                <h1 className="text-3xl font-bold">Frequently Asked</h1>
                <h1 className="text-3xl font-bold">Question</h1>
            </div>
            <div className="grid h-56 grid-cols-2 content-start justify-items-center gap-4">
                <div className="box-content flex h-6 w-3/4 justify-between rounded border-4 border-none bg-white p-4 shadow-md">
                    <p>Apakah seorang pemula bisa ikut belajar?</p>
                    <img src="/images/plus.png" />
                </div>
                <div className="box-content flex h-6 w-3/4 justify-between rounded border-4 border-none bg-white p-4 shadow-md">
                    <p>Kapan saya akan mendapatkan sertifikat?</p>
                    <img src="/images/plus.png" />
                </div>
                <div className="box-content flex h-6 w-3/4 justify-between rounded border-4 border-none bg-white p-4 shadow-md">
                    <p>Pengalaman belajar di Edugrow seperti apa?</p>
                    <img src="/images/plus.png" />
                </div>
                <div className="box-content flex h-6 w-3/4 justify-between rounded border-4 border-none bg-white p-4 shadow-md">
                    <p>apakah tersedia komunitas untuk belajar?</p>
                    <img src="/images/plus.png" />
                </div>
                <div className="box-content flex h-6 w-3/4 justify-between rounded border-4 border-none bg-white p-4 shadow-md">
                    <p>Materi yang tersedia di EduGrow ada apa saja?</p>
                    <img src="/images/plus.png" />
                </div>
                <div className="box-content flex h-6 w-3/4 justify-between rounded border-4 border-none bg-white p-4 shadow-md">
                    <p>Privilege lain apa yang bisa saya dapatkan?</p>
                    <img src="/images/plus.png" />
                </div>
            </div>
        </section>
    );
}
