import React from "react";
import css from "./style.css";

function TitleDotted(props) {
    const { children } = props;
    return (
        <div className={css["title-dotted"]}>
            <h3>{children}</h3>
        </div>
    );
}

export default TitleDotted;
