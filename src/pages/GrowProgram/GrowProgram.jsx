import { Fragment } from "react";
import { Helmet } from "react-helmet";

const titleTag = "EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function GrowProgram() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>

            {/* Export Bagian Lain, contoh di Home.jsx */}
        </Fragment>
    );
}
