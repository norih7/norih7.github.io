import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Popup from "../Popup";

storiesOf("organisms", module).add("Popup", () => {
    const props = {
        popup: {
            list: [{ id: "hoge" }]
        }
    };
    return (
        <Popup popup={props.popup} handleToggle={action("close")}>
            <p>content</p>
            <p>ポップアップの移動、拡大縮小が可能</p>
        </Popup>
    );
});
