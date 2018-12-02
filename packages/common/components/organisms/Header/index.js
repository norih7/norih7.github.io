import React from "react";
import { Link } from "gatsby";
import css from "./style.module.css";

const Header = props => {
    const { siteTitle, increment } = props;
    return (
        <div className={css["header"]}>
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    );
};

export default Header;
