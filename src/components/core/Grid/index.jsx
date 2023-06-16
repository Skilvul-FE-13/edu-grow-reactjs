import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

const Row = ({ children }) => {
    return <div className="-mx-4 flex flex-wrap">{children}</div>;
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
};

const Col = ({ children, size }) => {
    const colClasses = `w-full ${getSizeClass(size)}`;

    return <div className={`px-4 ${colClasses}`}>{children}</div>;
};

Col.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
};

const getSizeClass = (size) => {
    switch (size) {
        case "1":
            return "md:w-1/12";
        case "2":
            return "md:w-1/6";
        case "3":
            return "md:w-1/4";
        case "4":
            return "md:w-1/3";
        case "5":
            return "md:w-5/12";
        case "6":
            return "md:w-1/2";
        case "7":
            return "md:w-7/12";
        case "8":
            return "md:w-2/3";
        case "9":
            return "md:w-3/4";
        case "10":
            return "md:w-5/6";
        case "11":
            return "md:w-11/12";
        case "12":
            return "md:w-full";
        default:
            return "";
    }
};

export { Container, Row, Col };
