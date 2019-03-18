import React from "react";
import PropTypes from "prop-types";
import css from "./style.module.css";
import Wrapper from "@norih/common/components/organisms/Wrapper";
import { createUri } from "@norih/common/utils/Link";

/**
 * ヘッダーコンポーネント
 * @param {Object} props
 */
function Header(props) {
    const { siteTitle, menuList } = props;
    const list = menuList.map((item, i) => {
        const { to, title } = item;
        const key = `menu-list-${i}`;
        return (
            <li key={key}>
                <a href={createUri(to)}>{title}</a>
            </li>
        );
    });

    return (
        <div className={css["header"]}>
            <div className={css["menu"]}>
                <Wrapper>
                    <ul key="menu">
                        <li className={css["logo"]} key="menu-list-home">
                            <a href={createUri("/")}>{siteTitle}</a>
                        </li>
                        {list}
                    </ul>
                </Wrapper>
            </div>
        </div>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
    menuList: PropTypes.array
};

Header.defaultProps = {
    siteTitle: "",
    menuList: []
};

export default Header;
