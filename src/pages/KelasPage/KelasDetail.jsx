import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/core/Grid";
import "./kelas.style.css";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Question from "../DeskripsiKelas/Question";
import ToolsCard from "../../components/Layout/CardComponent/ToolsCard";
import ContentCard from "../../components/Layout/CardComponent/ContentCard";

const KelasDetail = () => {
    const { slug } = useParams();
    const [kelas, setKelas] = useState(null);

    useEffect(() => {
        const fetchKelasDetail = async () => {
            try {
                const response = await fetch(
                    `https://api.buttercms.com/v2/posts/${slug}/?auth_token=47e82c102e338fa635bbcef4504fa2b7ebd8103f`
                );
                const data = await response.json();
                console.log(data);
                setKelas(data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchKelasDetail();
    }, [slug]);

    if (!kelas) {
        return null;
    }

    const { title, featured_image } = kelas;

    return (
        <>
            {featured_image && (
                <div>
                    <section
                        style={{ "--image-url": `url(${featured_image})` }}
                        className="bg-[image:var(--image-url)] bg-cover bg-no-repeat"
                    >
                        <Container>
                            <div className=" flex flex-col gap-6 pb-40 pt-40 max-sm:px-6">
                                <h1 className="text-justify text-4xl font-bold text-white">
                                    {title}
                                </h1>
                                <p className="text-justify text-base text-white">
                                    Dari yang awam bisa jadi ahli buat bikin
                                    produk digital keren
                                </p>
                                <div className="flex grid-cols-2 flex-row gap-8 text-white max-sm:grid ">
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
                                    Gabung kelasnya dan nikmati serunya
                                    pengalaman belajar di EduGrow
                                </p>
                                <div className="button">
                                    <Link to="/login">
                                        <Button
                                            className="btn-join w-52 font-semibold"
                                            // size={"xl"}
                                        >
                                            Gabung Sekarang
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </section>
                    <Container>
                        <div className="mx-0 my-12 max-sm:px-6 max-[350px]:mx-4">
                            <div className="content-desc flex flex-col gap-6 md:flex-col lg:flex-col xl:flex-row">
                                <div className="left-content">
                                    <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Deskripsi Course
                                    </h1>
                                    <p className="text-justify">
                                        {kelas.summary}
                                    </p>
                                    <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Point Utama
                                    </h1>
                                    <div className="flex flex-col gap-8 pb-4">
                                        <div className="flex gap-8">
                                            <img
                                                src="/images/check.png"
                                                alt="check"
                                            />
                                            <p>
                                                Mengenal tools Whimsical dan
                                                Figma
                                            </p>
                                        </div>
                                        <div className="flex gap-8">
                                            <img
                                                src="/images/check.png"
                                                alt="check"
                                            />
                                            <p>
                                                Belajar mengeai style guide,
                                                layout grid dan auto layout di
                                                Figma
                                            </p>
                                        </div>
                                        <div className="flex gap-8">
                                            <img
                                                src="/images/check.png"
                                                alt="check"
                                            />
                                            <p>
                                                Mengetahui langkah-langkah
                                                membuat UI design
                                            </p>
                                        </div>
                                        <div className="flex gap-8">
                                            <img
                                                src="/images/check.png"
                                                alt="check"
                                            />
                                            <p>
                                                Praktek membuat UI design
                                                Website
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="right-content ">
                                    <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Konten Kelas
                                    </h1>
                                    <div className="rounded-md bg-slate-200 p-4">
                                        <ContentCard />
                                    </div>
                                    <ToolsCard />
                                </div>
                            </div>
                            <Question />
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
};

export default KelasDetail;

//     <div className="class-content">
//         <img
//             className="detail-image mt-0 h-full w-full blur-sm"
//             src={featured_image}
//             alt={title}
//         />
//         <div className="header-section mx-10 absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2">
//             <h1 className="text-[40px] font-semibold">{title}</h1>
//             <p className="text-sm font-normal ">
//                 Dari yang awam bisa jadi ahli buat bikin produk
//                 digital keren
//             </p>
//             <DescriptionList />
//             <p className="mb-6 text-sm font-normal">
//                 Gabung kelasnya dan nikmati serunya pengalaman
//                 belajar di EduGrow
//             </p>
//             <Link
//                 to={`./KelasOnline.jsx`}
//                 className="dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg bg-[#C8D4E4] px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-[#d1dbe7] focus:outline-none focus:ring-4 focus:ring-cyan-300"
//             >
//                 Gabung Sekarang
//             </Link>
//         </div>
//<Container>

//                 {/* {setKelas.map((e)=>(
//    <div key={e.slug}>

//        <p>{e.summary}</p>
//    </div>
// ))} */}
//                 {/* <div className="mb-4 flex items-center">
//     <img
//         className="mr-2 h-10 w-10 rounded-full"
//         src={author.profile_image}
//         alt={`${author.first_name} ${author.last_name}`}
//     />
//     <div>
//         <p className="text-sm text-gray-600">
//             {author.first_name} {author.last_name}
//         </p>
//         <p className="text-sm text-gray-600">{created}</p>
//     </div>
// </div> */}

//                 {/* <div className="mb-20" dangerouslySetInnerHTML={{ __html: body }} /> */}
//             </div>
//         </Container>
//     </div>
