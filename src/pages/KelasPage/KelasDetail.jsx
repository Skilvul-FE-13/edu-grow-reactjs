import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/core/Grid";

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
        <Container>
            <h1 className="my-20 text-4xl font-bold">{title}</h1>
            <div className="mb-4 flex items-center">
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
            </div>
            {featured_image && (
                <img
                    className="mb-10 w-full"
                    src={featured_image}
                    alt={title}
                />
            )}
            <div className="mb-20" dangerouslySetInnerHTML={{ __html: body }} />
        </Container>
    );
};

export default KelasDetail;
