import React from "react";
import { Link } from "gatsby";
import css from "./style.module.css";
import Wrapper from "@norih/common/components/organisms/Wrapper";

const link = [
    {
        to: "/about/",
        title: "about"
    }
];

const Header = props => {
    const { children, siteTitle, description, increment } = props;

    const list = link.map(item => {
        const { to, title } = item;
        return (
            <li>
                <Link to={to}>{title}</Link>
            </li>
        );
    });

    return (
        <div className={css["header"]}>
            <div className={css["menu"]}>
                <Wrapper>
                    <ul>
                        <li className={css["logo"]}>
                            <Link to="/">{siteTitle}</Link>
                        </li>
                        {list}
                    </ul>
                </Wrapper>
            </div>
        </div>
    );
};

export default Header;
