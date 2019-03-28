import * as React from "react";
import Knob from "@norih/common/components/atoms/Knob";
import { shallow } from "enzyme";

describe("atoms/Knob", () => {
    test("コンポーネントが存在すること", () => {
        const wrapper = shallow(<Knob />);
        // SFCなのでCSSのクラスがpropsに存在するか確認する
        const className = wrapper.props().className;
        expect(className).toEqual("default knob");
    });
});
