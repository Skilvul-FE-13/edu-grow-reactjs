import { Fragment } from "react";
import { Helmet } from "react-helmet";
import NavbarComponent from "../../components/Layout/NavbarComponent/NavbarComponent";

const titleTag = "Login | EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function Login() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>
            <NavbarComponent />

            {/* Export Bagian Lain, contoh di Home.jsx */}
        </Fragment>
    );
}
