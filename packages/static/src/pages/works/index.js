import React from "react";
import Layout from "../../components/pages/Layout";
import css from "./style.module.css";

const Works = () => (
    <Layout contentName="works">
        <section className={css["workList"]}>
            {/* <div className={css["works"]}>
                <figure className={css["figure"]}>
                    <img src="http://brush-clover.com/wp/wp-content/uploads/2019/02/brushclover.png" />
                </figure>
                <div className={css["description"]}>
                    <h2>
                        <a href="http://www.brush-clover.com/" target="_blank">
                            brushClover
                        </a>
                    </h2>
                    <p>2012.02</p>
                    <p>WordPressで実装したブログ。Webエンジニアの新人時代のアウトプットとして活用していました。</p>
                </div>
            </div>
            <div className={css["works"]}>
                <figure className={css["figure"]}>
                    <img src="http://brush-clover.com/wp/wp-content/uploads/2019/02/canvas-edit.png" />
                </figure>
                <div className={css["description"]}>
                    <h2>
                        <a href="http://www.brush-clover.com/canvas-edit/" target="_blank">
                            CanvasEdit
                        </a>
                    </h2>
                    <p>2012.01</p>
                    <p>
                        Canvas、FileAPI、Easel.js(Create.js)を利用した簡易画像加工アプリケーション。コードは拙いですが本格的なJSアプリケーションを初めて形にしたもの。
                    </p>
                </div>
            </div>
            <div className={css["works"]}>
                <figure className={css["figure"]}>
                    <img src="http://brush-clover.com/wp/wp-content/uploads/2019/02/magicwave.png" />
                </figure>
                <div className={css["description"]}>
                    <h2>
                        <a href="http://magic.brush-clover.com/" target="_blank">
                            MagicWave
                        </a>
                    </h2>
                    <p>2004.02</p>
                    <p>
                        学生の時から趣味でやっているゲーム攻略サイト。社会人になってからオリジナルのPHPフレームワークを実装して稼働中。記事はmarkdownに対応している。
                    </p>
                </div>
            </div> */}
        </section>
    </Layout>
);

export default Works;
