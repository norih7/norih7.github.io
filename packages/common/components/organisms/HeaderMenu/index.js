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
        title: "wip:works"
    },
    {
        to: "/",
        title: "blog"
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
            <ul>{list}</ul>
        </div>
    );
};

export default HeaderMenu;
