import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, array, object } from "@storybook/addon-knobs";
import Header from "@norih/common/components/organisms/Header";

const stroy = storiesOf("organisms", module).addDecorator(withKnobs);
const defaultConfig = {
    title: "Title",
    menu: {
        to: "/link/to/",
        title: "menu-title"
    }
};

stroy.add("Header", () => {
    const { title, menu } = defaultConfig;
    const props = {
        siteTitle: text("siteTile", title),
        menuList: [object("menu-1", menu), object("menu-2", menu)]
    };
    return <Header {...props} />;
});
