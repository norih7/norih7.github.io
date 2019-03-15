import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.css";

function Knob(props) {
    const { skin, onMouseDown, style } = props;
    const className = `${css[skin]} ${css["knob"]}`;
    return <div className={className} style={style} onMouseDown={onMouseDown} />;
}

Knob.propTypes = {
    skin: PropTypes.string
};

Knob.defaultProps = {
    skin: "default"
};

export default Knob;
