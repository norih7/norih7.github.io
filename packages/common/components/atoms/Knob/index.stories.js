import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, select } from "@storybook/addon-knobs";
import Knob from "../Knob";

const config = {
    style: { width: "10px" },
    skinList: ["default", "hide", "square"]
};

const story = storiesOf("atoms", module).addDecorator(withKnobs);

story.add("Knob", () => {
    return <Knob skin={select("skin", config.skinList)} style={object("style", config.style)} />;
});
