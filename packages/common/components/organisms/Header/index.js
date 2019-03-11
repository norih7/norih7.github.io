import React from "react";
import css from "./style.module.css";
import Wrapper from "@norih/common/components/organisms/Wrapper";

const link = [
    {
        to: "/about/",
        title: "about"
    }
];

export function createUri(path) {
    return process.env.NODE_ENV === "development" ? path : `/react${path}`;
}

function Header(props) {
    const { siteTitle } = props;
    const list = link.map((item, i) => {
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

export default Header;
