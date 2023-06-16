import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/core/Grid";
import { Card } from "flowbite-react";
import StarComponent from '../../components/Layout/CardComponent/StarComponent';

const KelasCard = () => {
    const [kelasList, setKelasList] = useState([]);

    useEffect(() => {
        const fetchKelas = async () => {
            try {
                const response = await fetch(
                    "https://api.buttercms.com/v2/posts/?auth_token=47e82c102e338fa635bbcef4504fa2b7ebd8103f"
                );
                const data = await response.json();
                // console.log(data)
                setKelasList(data.data);
                console.log(setKelasList)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchKelas();
    }, []);

    return (

        <Container>
            <div className="mx-0 my-12 max-[350px]:mx-4 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {kelasList.map((kelas) => (
                    
                    <Card key={kelas.slug} className="max-w-sm max-h-fit "
  imgAlt={kelas.title}
  imgSrc={kelas.featured_image}
>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
    {kelas.title}
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Free
    </p>
  </p>
  <div className="mt-2.5 flex items-center">
    <StarComponent />
    <StarComponent />
    <StarComponent />
    <StarComponent />
    <StarComponent />
    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
      <p>
        5.0
      </p>
    </span>
  </div>
    <Link
                                to={`/kelas/${kelas.slug}`}
                                className="rounded-lg bg-[#3A5088] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#C8D4E4] hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Pilih
                            </Link>
  
</Card>
                ))}
            </div>
        </Container>
    );
};

export default KelasCard;
