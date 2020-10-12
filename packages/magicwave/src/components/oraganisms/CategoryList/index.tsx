import * as React from "react";
import * as styles from "./styles.module.css";
import { Link } from "gatsby";

type List = {
    to: string;
    title: string;
};

type Props = {
    name: string;
    style: object;
    isFlex?: boolean;
    children: List[];
};

const CategoryList = (props: Props) => {
    const { name, style, isFlex, children } = props;
    const list = children.map((item, index) => {
        const { to, title } = item;
        const style = isFlex ? { width: "200px" } : {};
        return (
            <li key={index} style={style}>
                <Link to={to}>{title}</Link>
            </li>
        );
    });
    const flex = isFlex ? { display: "flex" } : {};
    return (
        <section className={styles["categoryList"]} style={style}>
            <h1>{name}</h1>
            <ul style={flex}>{list}</ul>
        </section>
    );
};

export default CategoryList;
