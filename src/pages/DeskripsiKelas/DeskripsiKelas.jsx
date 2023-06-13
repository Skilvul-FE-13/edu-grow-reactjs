import { Fragment } from "react";
import { Helmet } from "react-helmet";
import DeskripsiKelasCTA from "./DeskripsiKelasCTA";
import Question from "./Question";

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
            <Question />
        </Fragment>
    );
}
