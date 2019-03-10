import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.css";

const DEFAULT_STYLE = {
    width: "900px"
};

/**
 * Wrapperコンポーネント
 * 受け取ったchildrenを中央寄せで表示する
 * @param {Object} props
 */
function Wrapper(props) {
    const { children } = props;
    const style = Object.assign({}, DEFAULT_STYLE, props.style);
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
    style: DEFAULT_STYLE,
    children: ""
};

export default Wrapper;
