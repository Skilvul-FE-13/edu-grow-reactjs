import { Fragment } from "react";
import { Helmet } from "react-helmet";
import HomeCTA from "./HomeCTA";
import PartnerSection from "../../components/Layout/PartnerSection/PartnerSection";
import HomeKeuntungan from "./Keuntungan";
import ReasonCard from "./ReasonCard";
import ReasonTitle from "./ReasonTitle";

const titleTag = "Home | EduGrow.id";
const metaDesc = "Majukan Bangsa";

export default function Home() {
    return (
        <Fragment>
            <Helmet>
                <title>{titleTag}</title>
                <meta name="title" content={titleTag} />
                <meta name="description" content={metaDesc} />
            </Helmet>

            <HomeCTA />
            <PartnerSection variant={"primary"} />
            <ReasonTitle />
            <ReasonCard />
            <HomeKeuntungan />
            <PartnerSection variant={"secondary"} />
        </Fragment>
    );
}
