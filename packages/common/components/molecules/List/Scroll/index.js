import React from "react";
import css from "./style.css";

function ListScroll(props) {
    const { style } = props;
    return (
        <div className={css["scroll"]} style={style}>
            <ul>
                <li>hoge</li>
                <li>hoge</li>
                <li>hoge</li>
                <li>hoge</li>
                <li>hoge</li>
            </ul>
        </div>
    );
}

export default ListScroll;
