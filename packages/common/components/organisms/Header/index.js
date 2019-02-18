import React from "react";
import { Link } from "gatsby";
import css from "./style.module.css";
import HeaderMenu from "@norih/common/components/organisms/HeaderMenu";

const Header = props => {
    const { siteTitle, description, increment } = props;
    return (
        <div className={css["header"]}>
            <div className={css["container"]}>
                <h1>
                    <Link
                        to="/react/"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        <span>{siteTitle}</span>
                    </Link>
                </h1>
                <p className={css["description"]}>{description}</p>
            </div>
            <HeaderMenu />
        </div>
    );
};

export default Header;
