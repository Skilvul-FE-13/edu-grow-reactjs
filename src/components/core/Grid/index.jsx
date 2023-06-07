import PropTypes from "prop-types";

const Container = ({ children }) => {
    return <div className="container mx-auto sm:px-4 md:px-32">{children}</div>;
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
    const colClasses = `w-full md:w-${size}`;

    return <div className={`px-4 ${colClasses}`}>{children}</div>;
};

Col.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
};

export { Container, Row, Col };
