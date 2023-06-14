import { Button } from "flowbite-react";
import "./styleDescKelas.css";

export default function DeskripsiKelasCTA() {
    return (
        <section className="bg-[url('/images/hero-img.jpg')] bg-cover bg-no-repeat">
            <div className=" flex flex-col gap-6 pb-40 pl-80 pt-40">
                <h1 className="text-justify text-4xl font-bold text-white">
                    UI/UX Design Website With Figma
                </h1>
                <p className="text-justify text-base text-white">
                    Dari yang awam bisa jadi ahli buat bikin produk digital
                    keren
                </p>
                <div className="flex flex-row gap-8 text-white">
                    <div className="flex flex-row items-center gap-3 ">
                        <img src="/images/course.png" />
                        <p>3 Courses</p>
                    </div>
                    <div className="flex flex-row items-center gap-3 ">
                        <img src="/images/duration.png" />
                        <p>3h 18m</p>
                    </div>
                    <div className="flex flex-row items-center gap-3 ">
                        <img src="/images/video.png" />
                        <p>18 video</p>
                    </div>

                    <div className="flex flex-row items-center gap-3 ">
                        <img src="/images/read.png" />
                        <p>18 Reading Mterial</p>
                    </div>
                </div>
                <div className="flex flex-row gap-8 text-white">
                    <div className="flex flex-row items-center gap-3 ">
                        <img src="/images/task.png" />
                        <p>2 Kuis dan Latihan</p>
                    </div>
                    <div className="flex flex-row items-center gap-3 ">
                        <img src="/images/sertif.png" />
                        <p>Sertifikat</p>
                    </div>
                </div>
                <p className="text-justify text-base text-white">
                    Gabung kelasnya dan nikmati serunya pengalaman belajar di
                    EduGrow
                </p>
                <div className="button">
                    <Button className="btn-join font-semibold" size={"xl"}>
                        Gabung Sekarang
                    </Button>
                </div>
            </div>
        </section>
    );
}
