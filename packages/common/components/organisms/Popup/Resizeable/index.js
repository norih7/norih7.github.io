import React from "react";
import css from "./style.module.css";

const initialState = {
    width: 200,
    height: 200,
    left: 50,
    top: 50,
    zIndex: 0
};

export default class Resizeable extends React.Component {
    constructor() {
        super();
        this.state = initialState;
        this.setHeight = this.setHeight.bind(this);
        this.setWidth = this.setWidth.bind(this);
        this.getThisSideClassName = this.getThisSideClassName.bind(this);
        //this.setZIndex = this.setZIndex.bind(this);
    }

    setHeight(height) {
        // 初期値より小さいサイズ変更は行わない
        if (height < initialState.height) {
            return;
        }
        this.setState({
            height: height
        });
    }

    setWidth(width) {
        // 初期値より小さいサイズ変更は行わない
        if (width < initialState.width) {
            return;
        }
        this.setState({
            width: width
        });
    }

    setOffsetLeft(left) {
        this.setState({
            left: left
        });
    }

    setOffsetTop(top) {
        this.setState({
            top: top
        });
    }

    handleResizeCorner(e) {
        const offsetTop = e.target.parentNode.offsetTop;
        const offsetLeft = e.target.parentNode.offsetLeft;

        const callback = ev => {
            const width = ev.clientX - offsetLeft;
            const height = ev.clientY - offsetTop;

            this.setWidth(width);
            this.setHeight(height);
        };

        document.addEventListener("mousemove", callback);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", callback);
        });
    }

    handleDrug(e) {
        const targetWidth = e.target.parentNode.clientWidth;

        const callback = ev => {
            const left = ev.clientX - targetWidth / 2;
            const top = ev.clientY;

            this.setOffsetLeft(left);
            this.setOffsetTop(top);
        };

        document.addEventListener("mousemove", callback);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", callback);
        });

        // this.setZIndex();
    }

    getToggleClassName() {
        let className = "";

        if (this.props.data.isShow) {
            className = "show";
        } else {
            className = "hide";
        }

        return className;
    }

    setZIndex() {
        // let list = this.props.handleSetZIndex(this.props.data.id);
        // const nextZIndex = this.state.zIndex + 1;
        // this.setState({
        //     zIndex : nextZIndex
        // });
    }

    componentWillReceiveProps() {
        return false;
    }

    getThisSideClassName() {
        let className = "";

        if (this.props.active == this.props.data.id) {
            className = "this-side";
        } else {
            className = "";
        }

        return className;
    }

    changeStackOverPopUp(e) {
        const target = e.target;
        const className = /resizeable/.test(target.className) === true ? target.className : target.parentNode.className;
        // TODO: ポップアップの並び順を変更
    }

    render() {
        const { children } = this.props;
        const { width, height, top, left } = this.state;
        const resizeableClassName = `${css["resizeable"]} ${this.getToggleClassName()} ${this.getThisSideClassName()}`;
        return (
            <div
                className={resizeableClassName}
                style={{
                    width,
                    height,
                    top,
                    left
                }}
                onClick={this.changeStackOverPopUp}
            >
                <div className={`hold ${css["header"]}`} onMouseDown={this.handleDrug.bind(this)} />
                <div className={`hold ${css["resize"]}`} onMouseDown={this.handleResizeCorner.bind(this)} />
                <div className={css["close"]} onClick={this.props.handleToggle.bind(this)}>
                    ×
                </div>
                <div className={css["content"]}>{children}</div>
            </div>
        );
    }
}
