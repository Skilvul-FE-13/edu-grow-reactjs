import { Fragment } from "react";
import { Helmet } from "react-helmet";
import LoginForm from "./LoginForm";

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

            <LoginForm />
        </Fragment>
    );
}
