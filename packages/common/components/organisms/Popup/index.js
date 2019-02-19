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
        const { children, popup, handleToggle, handleThisSide } = this.props;

        return (
            <div>
                {this.props.popup.list.map(data => {
                    return (
                        <Resizeable
                            data={data}
                            key={data.id}
                            handleToggle={handleToggle}
                            handleThisSide={handleThisSide}
                            active={popup.active}
                        >
                            {children}
                        </Resizeable>
                    );
                })}
            </div>
        );
    }
}
