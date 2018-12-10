import React from "react";
import css from "./index.module.css";

function SkillList(props) {
    const { category, children } = props;
    console.log(children);
    const list = children.map(item => {
        return (
            <li>
                <span className={css["tag"]}>{item.experience}</span>
                {item.name}
            </li>
        );
    });
    return (
        <section className={css["skill"]}>
            <h3>{category}</h3>
            <ul>{list}</ul>
        </section>
    );
}

export default SkillList;
