/**
 * 実行環境に適切なURIを生成する
 * @param {String} path
 */
export function createUri(path) {
    // TODO: 環境によってURLを切り替えたい場合に修正する
    return process.env.NODE_ENV === "development" ? path : `${path}`;
}
