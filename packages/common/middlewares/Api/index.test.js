import rootSaga, { apiGenerator } from "../Api";
import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

const action = {
    type: "test",
    payload: {
        hoge: "hoge"
    }
};

const api = {};
it("test", () => {
    return (
        expectSaga(rootSaga, api)
            // 最終的に期待する結果
            .put({ type: "FETCH_USERS_SUCCESS", payload: {} })

            // Sagaタスクをforkし、テストを開始
            .run()
    );
});
