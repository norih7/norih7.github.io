import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "../Slider";

storiesOf("organisms", module).add("Slider", () => <Slider isDrag={true} />);
