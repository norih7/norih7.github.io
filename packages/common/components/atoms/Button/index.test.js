import * as React from "react";
import Button from "@norih/common/components/atoms/Button";
import { shallow } from "enzyme";

test("コンポーネントが存在すること", () => {
    const wrapper = shallow(<Button />);
    // SFCなのでCSSのクラスがpropsに存在するか確認する
    const className = wrapper.props().className;
    expect(className).toEqual("button");
});
