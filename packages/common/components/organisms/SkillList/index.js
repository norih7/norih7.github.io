import React from "react";
import css from "./index.module.css";
import Slider from "@norih/common/components/organisms/Slider";

function SkillList(props) {
    const { category, children } = props;

    const list = children.map((item, i) => {
        const { name, level, description } = item;
        const key = `skill-${category}-${i}`;
        return (
            <div key={key}>
                <header>
                    <h3>{name}</h3>
                    <div className={css["level"]}>
                        <Slider width={level} isDrag={false} skin="hide" style={{ background: "#E6527E" }} />
                    </div>
                </header>
                <p className={css["description"]}>{description}</p>
            </div>
        );
    });
    return <section className={css["skill"]}>{list}</section>;
}

export default SkillList;
