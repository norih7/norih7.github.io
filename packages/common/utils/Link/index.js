/**
 * 実行環境に適切なURIを生成する
 * @param {String} path
 */
export function createUri(path) {
    return process.env.NODE_ENV === "development" ? path : `/react${path}`;
}
