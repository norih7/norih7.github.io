import * as React from "react";
import ListScroll from "@norih/common/components/molecules/List/Scroll";
import { shallow } from "enzyme";

describe("molecules/ListScroll", () => {
    test("コンポーネントが存在すること", () => {
        const wrapper = shallow(<ListScroll />);
        // SFCなのでCSSのクラスがpropsに存在するか確認する
        const className = wrapper.props().className;
        expect(className).toEqual("scroll");
    });
});
