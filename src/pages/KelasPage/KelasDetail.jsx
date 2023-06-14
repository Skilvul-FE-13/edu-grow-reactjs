import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/core/Grid";
import "./style.css";
import { Link } from "react-router-dom";
import ContentCard from "../../components/Layout/CardComponent/ContentCard";
import ToolsCard from "../../components/Layout/CardComponent/ToolsCard";
import QuestionCard from "../../components/Layout/CardComponent/QuestionCard";
import DescriptionList from "../../components/Layout/DetailClassSection/DescriptionList";

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

    const { title, author, created, featured_image, body } = kelas;

    return (
        <>
            {featured_image && (
                <div className="class-content">
                    <img
                        className="detail-image mt-0 h-full w-full blur-sm"
                        src={featured_image}
                        alt={title}
                    />
                    <div className="header-section mx-10 absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-[40px] font-semibold">{title}</h1>
                        <p className="text-sm font-normal ">
                            Dari yang awam bisa jadi ahli buat bikin produk
                            digital keren
                        </p>
                        <DescriptionList />
                        <p className="mb-6 text-sm font-normal">
                            Gabung kelasnya dan nikmati serunya pengalaman
                            belajar di EduGrow
                        </p>
                        <Link
                            to={`./KelasOnline.jsx`}
                            className="dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg bg-[#C8D4E4] px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-[#d1dbe7] focus:outline-none focus:ring-4 focus:ring-cyan-300"
                        >
                            Gabung Sekarang
                        </Link>
                    </div>
                    <Container>
                        <div className="mx-0 my-12 max-[350px]:mx-4">
                            <div className="content-desc flex flex-col gap-4 md:flex-col lg:flex-col xl:flex-row">
                                <div className="left-content">
                                    <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Deskripsi Course
                                    </h1>
                                    <p className="text-justify">
                                    { kelas.summary}
                                    </p>
                                    <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Point Utama
                                    </h1>
                                    <div className="point-list flex gap-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Deleniti, fugit.
                                        </p>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Konten Kelas
                                    </h1>
                                    <ContentCard />
                                    <h1 className="sub-title my-10 text-2xl font-semibold">
                                        Tools Pendukung
                                    </h1>
                                    <ToolsCard />
                                    <div className="tools"></div>
                                </div>
                            </div>
                            <div className="quetion mt-20">
                                <p className="text-center font-semibold text-[#3A5088]">
                                    Mari Bertanya!
                                </p>
                                <h1 className="mt-4 text-center text-4xl font-black">
                                    Frequently{" "}
                                </h1>
                                <h1 className="mb-6 mt-2 text-center text-4xl font-extrabold">
                                    Asked Question
                                </h1>
                                <QuestionCard />
                            </div>

                            {/* {setKelas.map((e)=>(
               <div key={e.slug}>

                   <p>{e.summary}</p>
               </div> 
            ))} */}
                            {/* <div className="mb-4 flex items-center">
                <img
                    className="mr-2 h-10 w-10 rounded-full"
                    src={author.profile_image}
                    alt={`${author.first_name} ${author.last_name}`}
                />
                <div>
                    <p className="text-sm text-gray-600">
                        {author.first_name} {author.last_name}
                    </p>
                    <p className="text-sm text-gray-600">{created}</p>
                </div>
            </div> */}

                            {/* <div className="mb-20" dangerouslySetInnerHTML={{ __html: body }} /> */}
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
};

export default KelasDetail;
