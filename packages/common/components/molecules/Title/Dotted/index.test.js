import * as React from "react";
import TitleDotted from "@norih/common/components/molecules/Title/Dotted";
import { shallow } from "enzyme";

describe("molecules/TitleDotted", () => {
    test("コンポーネントが存在すること", () => {
        const wrapper = shallow(<TitleDotted />);
        // SFCなのでCSSのクラスがpropsに存在するか確認する
        const className = wrapper.props().className;
        expect(className).toEqual("title-dotted");
    });
});
