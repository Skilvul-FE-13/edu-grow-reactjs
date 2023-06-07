import { Fragment } from "react";
import { Helmet } from "react-helmet";
import HeroKelas from "./HeroKelas";

const titleTag = "KelasPage | EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function KelasPage() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>
            <HeroKelas />
            {/* Export Bagian Lain, contoh di Home.jsx */}
        </Fragment>
    );
}
