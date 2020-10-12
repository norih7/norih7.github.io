import * as React from "react";
import * as styles from "./styles.module.css";
import { Link } from "gatsby";

type Props = {
    title: string;
    style: object;
    children: any;
};

const Tips = (props: Props) => {
    const { title, children, style } = props;
    return (
        <section className={styles["tips"]} style={style}>
            <header>
                <span>Tips</span>
                {title}
            </header>
            <div className={styles["content"]}>{children}</div>
        </section>
    );
};

export default Tips;
