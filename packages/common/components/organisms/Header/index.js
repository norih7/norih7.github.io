import React from "react";
import { Link } from "gatsby";
import css from "./style.module.css";

const Header = props => {
    const { siteTitle, increment } = props;
    return (
        <div className={css["header"]}>
            <h1>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    <span>{siteTitle}</span>
                </Link>
            </h1>
        </div>
    );
};

export default Header;
