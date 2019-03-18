import React from "react";
import PropTypes from "prop-types";
import css from "./style.css";
import TitleDotted from "@norih/common/components/molecules/Title/Dotted";
import ListScroll from "@norih/common/components/molecules/List/Scroll";

/**
 * スクロール可能なリスト表示コンポーネント
 * @param {Object} props
 */
function ScrollList(props) {
    const { style, children } = props;
    return (
        <div className={css["scroll-list"]} style={style}>
            <TitleDotted>header</TitleDotted>
            <ListScroll style={{ top: 40 }}>{children}</ListScroll>
        </div>
    );
}

ScrollList.propTypes = {
    style: PropTypes.object
};

ScrollList.defaultProps = {
    style: {}
};

export default ScrollList;
