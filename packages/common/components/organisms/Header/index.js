import React from "react";
import { Link } from "gatsby";
import css from "./style.module.css";
import HeaderMenu from "@norih/common/components/organisms/HeaderMenu";

const Header = props => {
    const { children, siteTitle, description, increment } = props;
    return (
        <div className={css["header"]}>
            <div className={css["container"]}>
                {/* <h1>
                    <Link
                        to="/"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        <span>{siteTitle}</span>
                    </Link>
                </h1> */}
                {/* <p className={css["description"]}>{description}</p>*/}
                <HeaderMenu />
            </div>
        </div>
    );
};

export default Header;
