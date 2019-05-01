import * as React from "react";

interface Props {
    children: string;
    onClick: () => void;
}

const Button = (props: Props) => <button onClick={props.onClick}>{props.children}</button>;

export default Button;
