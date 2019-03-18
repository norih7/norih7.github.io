import React from "react";
import PropTypes from "prop-types";
import Wrapper from "@norih/common/components/organisms/Wrapper";
import css from "./index.module.css";

/**
 * フッターコンポーネント
 * @param {Object} props
 */
function Footer(props) {
    const { children } = props;
    return (
        <div className={css["footer"]}>
            <Wrapper>{children}</Wrapper>
        </div>
    );
}

Footer.propTypes = {
    children: PropTypes.element
};

Footer.propTypes = {
    children: () => {}
};

export default Footer;
