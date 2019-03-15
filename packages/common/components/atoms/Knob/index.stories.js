import React from "react";
import { storiesOf } from "@storybook/react";
import Knob from "../Knob";

storiesOf("atoms", module).add("Knob", () => <Knob skin="hide" style={{ width: "10px" }} />);
