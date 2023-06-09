import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/core/Grid";

const KelasCard = () => {
    const [kelasList, setKelasList] = useState([]);

    useEffect(() => {
        const fetchKelas = async () => {
            try {
                const response = await fetch(
                    "https://api.buttercms.com/v2/posts/?auth_token=47e82c102e338fa635bbcef4504fa2b7ebd8103f"
                );
                const data = await response.json();
                setKelasList(data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchKelas();
    }, []);

    return (
        <Container>
            <div className="my-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {kelasList.map((kelas) => (
                    <div
                        key={kelas.slug}
                        className="max-w-sm overflow-hidden rounded shadow-lg"
                    >
                        <img
                            className="w-full"
                            src={kelas.featured_image}
                            alt={kelas.title}
                        />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold">
                                {kelas.title}
                            </div>
                            <p className="text-base text-gray-700">
                                {kelas.summary}
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <Link
                                to={`/kelas/${kelas.slug}`}
                                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            >
                                Pilih
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default KelasCard;
