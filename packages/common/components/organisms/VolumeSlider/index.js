import React from "react";
import styles from "./style.css";

const MAX_WIDTH = 100;

export default class VolumeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.offsetLeft;
        this.state = {
            width: 20
        };
        this.mouseDown = this.mouseDown.bind(this);
        this.moveCallback = this.moveCallback.bind(this);
        this.removeCallback = this.removeCallback.bind(this);
    }

    moveCallback(e) {
        const width = e.clientX - this.offsetLeft;
        // 最大値を超えているのであればstateを更新しない
        if (width > MAX_WIDTH) {
            return;
        }
        this.setState({
            width
        });
    }

    removeCallback() {
        window.removeEventListener("mousemove", this.moveCallback);
    }

    mouseDown() {
        window.addEventListener("mousemove", this.moveCallback);
        window.addEventListener("mouseup", this.removeCallback);
    }

    render() {
        const inlineStyle = {
            width: `${this.state.width}px`
        };
        return (
            <div>
                <div
                    className={styles["slider-bg"]}
                    style={{ marginLeft: 25 }}
                    ref={e => {
                        if (e == null) {
                            return;
                        }
                        this.offsetLeft = e.offsetLeft;
                    }}
                >
                    <div className={styles["slider-active"]} onMouseDown={this.mouseDown} style={inlineStyle} />
                </div>
            </div>
        );
    }
}
