import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.css";

function Wrapper(props) {
    const { children, style } = props;
    return (
        <div className={css["wrapper"]} style={style}>
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    style: PropTypes.object,
    children: PropTypes.any
};

Wrapper.defaultProps = {
    style: {
        width: 900
    },
    children: ""
};

export default Wrapper;
