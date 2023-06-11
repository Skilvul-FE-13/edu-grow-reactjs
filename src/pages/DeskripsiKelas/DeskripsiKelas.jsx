import { Fragment } from "react";
import { Helmet } from "react-helmet";
import DeskripsiKelasCTA from "./DeskripsiKelasCTA";

const titleTag = "Deskripsi Kelas | EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function DeskripsiKelas() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>
            <DeskripsiKelasCTA />
        </Fragment>
    );
}
