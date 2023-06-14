import "./styleDescKelas.css";
import { Container } from "../../components/core/Grid";

export default function Question() {
    return (
        <Container>
            <section className="pb-32 pt-16">
                <div className="text-center">
                    <h3 className="text-base font-medium text-blue-900">
                        Mari Bertanya!
                    </h3>
                    <h1 className="text-3xl font-bold">Frequently Asked</h1>
                    <h1 className="text-3xl font-bold">Question</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2">
                    <div className="box-content flex h-6 w-full justify-between rounded border-4 border-none bg-white p-4 shadow-md md:w-3/4">
                        <p>Apakah seorang pemula bisa ikut belajar?</p>
                        <img src="/images/plus.png" alt="plus" />
                    </div>
                    <div className="box-content flex h-6 w-full justify-between rounded border-4 border-none bg-white p-4 shadow-md md:w-3/4">
                        <p>Kapan saya akan mendapatkan sertifikat?</p>
                        <img src="/images/plus.png" alt="plus" />
                    </div>
                    <div className="box-content flex h-6 w-full justify-between rounded border-4 border-none bg-white p-4 shadow-md md:w-3/4">
                        <p>Pengalaman belajar di Edugrow seperti apa?</p>
                        <img src="/images/plus.png" alt="plus" />
                    </div>
                    <div className="box-content flex h-6 w-full justify-between rounded border-4 border-none bg-white p-4 shadow-md md:w-3/4">
                        <p>Apakah tersedia komunitas untuk belajar?</p>
                        <img src="/images/plus.png" alt="plus" />
                    </div>
                    <div className="box-content flex h-6 w-full justify-between rounded border-4 border-none bg-white p-4 shadow-md md:w-3/4">
                        <p>Materi yang tersedia di EduGrow ada apa saja?</p>
                        <img src="/images/plus.png" alt="plus" />
                    </div>
                    <div className="box-content flex h-6 w-full justify-between rounded border-4 border-none bg-white p-4 shadow-md md:w-3/4">
                        <p>Privilege lain apa yang bisa saya dapatkan?</p>
                        <img src="/images/plus.png" alt="plus" />
                    </div>
                </div>
            </section>
        </Container>
    );
}
