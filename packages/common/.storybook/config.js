import { configure, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const req = require.context("../components", true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

global.___loader = {
    enqueue: () => {},
    hovering: () => {}
};

global.__PATH_PREFIX__ = "";

window.___navigate = pathname => {
    action("NavigateTo:")(pathname);
};

configure(loadStories, module);
