import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Wrapper from "../Wrapper";

storiesOf("organisms", module).add("Wrapper", () => {
    const props = {};
    return (
        <Wrapper {...props}>
            <p>content</p>
        </Wrapper>
    );
});
