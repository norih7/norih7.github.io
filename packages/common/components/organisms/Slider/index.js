import React from "react";
import styles from "./index.module.css";
import Knob from "@norih/common/components/atoms/Knob";
import { isNull } from "@norih/common/utils/Validate";

const MAX_SLIDER = 100;
const MIN_SLIDER = 0;
const DISPLAY_MAX_SLIDER = 90;

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.offsetLeft = null;
        const { width } = this.props;
        this.state = {
            width
        };
        this.onDrag = this.onDrag.bind(this);
        this.setSliderWidth = this.setSliderWidth.bind(this);
        this.removeEventHandler = this.removeEventHandler.bind(this);
    }

    /**
     * 一連のドラッグ操作のイベントハンドラ
     */
    onDrag(e) {
        window.addEventListener("mousemove", this.setSliderWidth);
        window.addEventListener("mouseup", this.removeEventHandler);
    }

    /**
     * スライダーの横幅をstateに保存する
     * @param {Object} e
     */
    setSliderWidth(e) {
        const width = e.clientX - this.offsetLeft;
        // 最大値を超えているのであればstateを更新しない
        if (width > MAX_SLIDER || width < MIN_SLIDER) return;
        this.setState({
            width
        });
    }

    /**
     * mousemove時に登録していたイベントハンドラを削除する
     */
    removeEventHandler() {
        window.removeEventListener("mousemove", this.setSliderWidth);
    }

    render() {
        const inlineStyle = {
            width: `${this.state.width}px`
        };
        if (this.state.width >= DISPLAY_MAX_SLIDER) {
            inlineStyle.width = `${DISPLAY_MAX_SLIDER}px`;
        }

        const { isDrag, width, skin, style } = this.props;

        const props = {
            slider: {
                className: styles["slider"]
            },
            active: {
                className: styles["sliderActive"],
                style,
                skin
            }
        };
        if (isDrag === true) {
            props.slider.onMouseDown = this.setSliderWidth;
            props.slider.style = {
                cursor: "pointer"
            };
            props.active.onMouseDown = this.onDrag;
            props.active.style = Object.assign({}, style, inlineStyle);
        }
        return (
            <div {...props.slider}>
                <div
                    className={styles["bg"]}
                    ref={e => {
                        if (isNull(e) === true) return;
                        this.offsetLeft = e.offsetLeft;
                    }}
                >
                    <Knob {...props.active} />
                </div>
            </div>
        );
    }
}

Slider.defaultProps = {
    isDrag: true,
    width: 20,
    skin: "default"
};
