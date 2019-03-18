import React from "react";
import css from "./style.css";

function ListScroll(props) {
    const { style, children } = props;
    return (
        <div className={css["scroll"]} style={style}>
            {children}
        </div>
    );
}

export default ListScroll;
