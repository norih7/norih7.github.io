import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.css";

function Button(props) {
    const { children } = props;
    return <button className={css["button"]}>{children}</button>;
}

Button.propTypes = {};

export default Button;
