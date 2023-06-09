import { Fragment } from "react";
import { Helmet } from "react-helmet";
import KelasCard from "./KelasCard";
import KelasDetail from "./KelasDetail";

const titleTag = "Kelas | EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function Kelas() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>
            <KelasCard />
            <KelasDetail />
        </Fragment>
    );
}
