import { Fragment } from "react";
import { Helmet } from "react-helmet";
import PartnerSection from "../../components/Layout/PartnerSection/PartnerSection";
import { Container } from "../../components/core/Grid";
import "./grow.style.css";
import KelasCard from "../KelasPage/KelasCard";

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

            <Container>
                <section className="my-12 space-y-2">
                    <p className="font-color font-semibold">
                        #BelajarDariAhlinya
                    </p>
                    <h1 className="text-4xl font-extrabold">
                        Kelas Grow Program
                    </h1>
                    <p className="text-slate-500">
                        Belajar mendasain tampilan website atau mobile apps dan
                        juga berkolaborasi dengan tim developer
                    </p>
                </section>
            </Container>
            <KelasCard />

            <PartnerSection variant={"secondary"} />
        </Fragment>
    );
}
