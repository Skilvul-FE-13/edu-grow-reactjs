import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Container } from "../../components/core/Grid";
import VideoComponent from "../../components/Layout/CardComponent/VideoComponent";
import ContentCard from "../../components/Layout/CardComponent/ContentCard";
import ToolsCard from "../../components/Layout/CardComponent/ToolsCard";
const titleTag = "KelasOnline | EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function KelasOnline() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>
            <Container>
                <div className="flex gap-4 max-xl:flex-col max-sm:px-4">
                <div className="left-content">
                    <VideoComponent />
                    <h1 className="sub-title my-10 text-2xl font-semibold">
                        Project overview, pengenalan UI/UX, dan penjelasan
                    </h1>
                    <p className="text-justify">
                        Website Desain UI/UX dengan Figma adalah platform
                        komprehensif yang memberdayakan desainer untuk
                        menciptakan antarmuka yang menarik secara visual dan
                        ramah pengguna untuk website, aplikasi mobile, dan
                        produk digital lainnya. Figma, sebuah alat desain
                        berbasis cloud yang sangat kuat, menjadi dasar untuk
                        website ini. Dengan antarmuka yang ramah pengguna dan
                        beragam fitur intuitif, Website Desain UI/UX dengan
                        Figma memberikan pengalaman yang mulus bagi desainer.
                        Website ini menawarkan lingkungan kolaboratif di mana
                        beberapa anggota tim dapat bekerja secara bersamaan pada
                        suatu proyek, memudahkan komunikasi, berbagi umpan
                        balik, dan melakukan iterasi desain secara real-time.
                        Website ini menyediakan koleksi elemen desain yang
                        beragam, seperti tombol, ikon, dan template, yang dapat
                        dimanfaatkan oleh desainer untuk mempercepat alur kerja
                        mereka. Sumber daya ini dapat dengan mudah disesuaikan
                        dan diintegrasikan ke dalam desain, menghemat waktu dan
                        usaha yang berharga.
                    </p>
                    <h1 className="sub-title my-10 text-xl font-semibold">
                        Pengenalan UI/UX
                    </h1>
                    <p className="text-justify">
                        UI (User Interface) dan UX (User Experience) adalah dua
                        konsep penting dalam desain produk digital. UI adalah
                        segala sesuatu yang terlihat oleh pengguna pada tampilan
                        perangkat lunak, termasuk tombol, menu, dan elemen
                        visual lainnya. UX mencakup bagaimana pengguna
                        berinteraksi dengan produk, bagaimana mereka merasakan
                        pengalaman penggunaan, dan apakah mereka dapat mencapai
                        tujuan mereka dengan mudah. Tujuan dari UI/UX adalah
                        menciptakan pengalaman pengguna yang positif dengan
                        desain yang intuitif dan mudah digunakan, sehingga
                        pengguna dapat mencapai tujuan mereka dengan mudah dan
                        menyenangkan. Pengguna yang senang dengan pengalaman
                        penggunaan akan meningkatkan tingkat kepuasan,
                        kepercayaan, dan loyalitas pengguna terhadap produk
                        tersebut.
                    </p>
                </div>
                <div className="right-content">
                <h1 className="sub-title my-10 text-2xl font-semibold">
                Daftar Modul
                    </h1>
                    <div className="p-4 bg-slate-200 rounded-md">
                    <ContentCard />
                    
                    </div>
                    <ToolsCard />
                </div>
                </div>
                
            </Container>
        </Fragment>
    );
}
