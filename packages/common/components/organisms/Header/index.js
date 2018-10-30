import React from "react";
import { Link } from "gatsby";
import Button from "@components/organisms/Popup/Button";
import Error from "@components/organisms/ErrorComponent";

const Header = ({ siteTitle }) => (
    <div
        style={{
            background: "rebeccapurple",
            marginBottom: "1.45rem"
        }}
    >
        <Error />
        <div
            style={{
                margin: "0 auto",
                maxWidth: 960,
                padding: "1.45rem 1.0875rem"
            }}
        >
            <Button />
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
    </div>
);

export default Header;
