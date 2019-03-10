import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../Button";
import css from "@norih/common/components/css/Button/primary.css";

storiesOf("atoms", module).add("Button", () => <Button css={css}>Button</Button>);
