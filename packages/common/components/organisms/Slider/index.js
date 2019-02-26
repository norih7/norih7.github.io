import React from "react";
import styles from "./style.css";
import { isNull } from "@norih/common/utils/Validate";

const MAX_SLIDER = 100;
const MIN_SLIDER = 0;
const DISPLAY_MAX_SLIDER = 90;

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.offsetLeft;
        this.state = {
            width: 20
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
        return (
            <div className={styles["slider"]} onMouseDown={this.setSliderWidth}>
                <div
                    className={styles["slider-bg"]}
                    ref={e => {
                        if (isNull(e) === true) return;
                        this.offsetLeft = e.offsetLeft;
                    }}
                >
                    <div className={styles["slider-active"]} onMouseDown={this.onDrag} style={inlineStyle} />
                </div>
            </div>
        );
    }
}
