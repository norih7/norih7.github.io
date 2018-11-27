import React from "react";
import css from "./style.css";
import TitleDotted from "@components/molecules/Title/Dotted";
import ListScroll from "@components/molecules/List/Scroll";

function ScrollList(props) {
    const { style } = props;
    return (
        <div className={css["scroll-list"]} style={style}>
            <TitleDotted>header</TitleDotted>
            <ListScroll style={{ top: 40 }} />
        </div>
    );
}

export default ScrollList;
