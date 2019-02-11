import React from "react";
import css from "./style.module.css";
import { Shape, Stage, Container } from "@createjs/easeljs";
import { Tween } from "@createjs/tweenjs";

export default class Canvas extends React.Component {
    componentDidMount() {
        const stage = new Stage("myCanvas");

        const circle = new Shape();
        circle.graphics.beginFill("DarkRed").drawRect(0, 0, 50, 50);

        const container = new Container();

        const circle2 = new Shape();
        circle2.graphics.beginFill("#555").drawRect(0, 0, 50, 50);
        circle2.x = 100;
        circle2.y = 0;
        container.addChild(circle2);

        container.addChild(circle);

        stage.addChild(container);

        container.x = 0;
        container.y = 0;

        Tween.get(container, { loop: true })
            .wait(300)
            .to({ x: 0, y: 0, scale: 1 }, 700)
            .to({ x: 0, y: 100, scale: 1 }, 1200)
            .to({ x: 0, y: 50, scale: 1 }, 1200)
            .to({ x: 0, y: 100, scale: 1 }, 700);

        update();

        // 毎フレームステージを自動更新する
        function update() {
            stage.update();
            requestAnimationFrame(() => update());
        }
    }
    render() {
        return (
            <div className={css["headerMenu"]}>
                <canvas id="myCanvas" width="500" height="340" />
            </div>
        );
    }
}
