import { Fragment } from "react";
import { Helmet } from "react-helmet";
import AboutCTA from "./AboutCTA";
import PartnerSection from "../../components/Layout/PartnerSection/PartnerSection";
import AboutReason from "./AboutReason";
import AboutTim from "./AboutTim";
import CardTim from "./CardTim";
import "./styleAbout.css";

const titleTag = "About | EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function About() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>

            <AboutCTA />
            <PartnerSection variant={"primary"} />
            <AboutReason />
            <br></br>
            <AboutTim />
            <br></br>
            <CardTim />
            <br></br>
            <PartnerSection variant={"secondary"} />
        </Fragment>
    );
}
