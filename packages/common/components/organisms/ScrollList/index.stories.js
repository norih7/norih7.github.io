import React from "react";
import { storiesOf } from "@storybook/react";
import ScrollList from "@norih/common/components/organisms/ScrollList";

storiesOf("organisms", module).add("ScrollList", () => <ScrollList style={{ width: 500, height: 140 }} />);
