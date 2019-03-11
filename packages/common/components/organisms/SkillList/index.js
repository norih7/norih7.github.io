import React from "react";
import css from "./index.module.css";

function SkillList(props) {
    const { category, children } = props;
    const list = children.map(item => {
        const { name } = item;
        return <li>{name}</li>;
    });
    return (
        <section className={css["skill"]}>
            <h3>{category}</h3>
            <ul>{list}</ul>
        </section>
    );
}

export default SkillList;
