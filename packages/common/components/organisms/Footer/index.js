import React from "react";
import Wrapper from "@norih/common/components/organisms/Wrapper";
import css from "./index.module.css";

function Footer(props) {
    const { children } = props;
    return (
        <div className={css["footer"]}>
            <Wrapper>{children}</Wrapper>
        </div>
    );
}

export default Footer;
