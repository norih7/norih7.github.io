import * as React from "react";

interface Props {
    children: string;
}

const Button = (props: Props) => <button>{props.children}</button>;

export default Button;
