import React from "react";
import { storiesOf } from "@storybook/react";
// import { withKnobs, object, select } from "@storybook/addon-knobs";
import Knob from "../Knob";

const story = storiesOf("atoms", module);

const config = {
    skinList: ["hide"]
};

// story.add("Knob", () => {
//     const style = { width: "10px" };
//     return <Knob skin={select("skin", config: skinList)} style={object("style", style)} />;
// });

story.add("Knob", () => {
    const style = { width: "10px" };
    return <Knob skin={select("skin", config.skinList)} style={object("style", style)} />;
});
