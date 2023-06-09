import { Card } from "flowbite-react";
import { Container } from "../../../components/core/Grid";
import StarComponent from "./StarComponent";

const CardTim = () => {
    return (
        <div className="card mb-10 mt-4 max-[350px]:mx-4">
            <Container>
                <Card
                    className="max-h-fit max-w-sm "
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://source.unsplash.com/467x232?design"
                >
                    <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
                        <p>Noteworthy technology acquisitions 2021</p>
                    </h5>
                    <p className="dark:text-gray-400 font-normal text-gray-700">
                        <p>Free</p>
                    </p>
                    <div className="mb-5 mt-2.5 flex items-center">
                        <StarComponent />
                        <StarComponent />
                        <StarComponent />
                        <StarComponent />
                        <StarComponent />
                        <span className="dark:bg-cyan-200 dark:text-cyan-800 ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
                            <p>5.0</p>
                        </span>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default CardTim;
