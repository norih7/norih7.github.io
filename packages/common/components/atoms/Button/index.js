import React from "react";

function Button(props) {
    const { css, children } = props;
    const { button } = css;
    return <button className={button}>{children}</button>;
}

export default Button;
