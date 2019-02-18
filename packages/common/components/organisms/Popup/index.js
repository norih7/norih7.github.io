import React from "react";
import Resizeable from "./Resizeable";

const initCount = {
    id: 1,
    zIndex: 0
};

export default class Popup extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [initCount]
        };

        this.handleSetZIndex = this.handleSetZIndex.bind(this);
    }

    handleSetZIndex(id) {
        let zIndex = 0;
        let indexList = [];
        this.props.popup.list.map(data => {
            if (data.id == id) {
                zIndex = 1;
            }

            indexList.push({
                id: data.id,
                zIndex: zIndex
            });
        });
    }

    render() {
        return (
            <div>
                {this.props.popup.list.map(data => {
                    return (
                        <Resizeable
                            data={data}
                            key={data.id}
                            handleToggle={this.props.handleToggle}
                            handleThisSide={this.props.handleThisSide}
                            active={this.props.popup.active}
                        />
                    );
                })}
            </div>
        );
    }
}
