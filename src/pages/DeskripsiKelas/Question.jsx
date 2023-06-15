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
                <div className=" grid grid-cols-1 justify-items-center gap-6 pt-12 md:grid-cols-2">
                    <div className="box-content flex justify-between rounded border-4 border-none bg-white p-5 shadow-md md:w-3/4 lg:w-2/3 xl:w-3/4">
                        <p>Apakah seorang pemula bisa ikut belajar?</p>
                        <img
                            className="h-6 w-6"
                            src="/images/plus.png"
                            alt="plus"
                        />
                    </div>
                    <div className="box-content flex justify-between rounded border-4 border-none bg-white p-5 shadow-md md:w-3/4 lg:w-2/3 xl:w-3/4">
                        <p>Kapan saya akan mendapatkan sertifikat?</p>
                        <img
                            className="h-6 w-6"
                            src="/images/plus.png"
                            alt="plus"
                        />
                    </div>
                    <div className="box-content flex justify-between rounded border-4 border-none bg-white p-5 shadow-md md:w-3/4 lg:w-2/3 xl:w-3/4">
                        <p>Pengalaman belajar di Edugrow seperti apa?</p>
                        <img
                            className="h-6 w-6"
                            src="/images/plus.png"
                            alt="plus"
                        />
                    </div>
                    <div className="box-content flex justify-between rounded border-4 border-none bg-white p-5 shadow-md md:w-3/4 lg:w-2/3 xl:w-3/4">
                        <p>Apakah tersedia komunitas untuk belajar?</p>
                        <img
                            className="h-6 w-6"
                            src="/images/plus.png"
                            alt="plus"
                        />
                    </div>
                    <div className="box-content flex justify-between rounded border-4 border-none bg-white p-5 shadow-md md:w-3/4 lg:w-2/3 xl:w-3/4">
                        <p>Materi yang tersedia di EduGrow ada apa saja?</p>
                        <img
                            className="h-6 w-6"
                            src="/images/plus.png"
                            alt="plus"
                        />
                    </div>
                    <div className="box-content flex justify-between rounded border-4 border-none bg-white p-5 shadow-md md:w-3/4 lg:w-2/3 xl:w-3/4">
                        <p>Privilege lain apa yang bisa saya dapatkan?</p>
                        <img
                            className="h-6 w-6"
                            src="/images/plus.png"
                            alt="plus"
                        />
                    </div>
                </div>
            </section>
        </Container>
    );
}
