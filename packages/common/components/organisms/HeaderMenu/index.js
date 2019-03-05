import React from "react";
import { Link } from "gatsby";
import css from "./style.module.css";

const link = [
    {
        to: "/about/",
        title: "about"
    },
    {
        to: "/works/",
        title: "works"
    }
];

const HeaderMenu = props => {
    const list = link.map(item => {
        const { to, title } = item;
        return (
            <li>
                <Link to={to}>{title}</Link>
            </li>
        );
    });

    return (
        <div className={css["headerMenu"]}>
            <ul>
                <li>norih</li>
                {list}
            </ul>
        </div>
    );
};

export default HeaderMenu;
