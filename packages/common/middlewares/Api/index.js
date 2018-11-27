import { call, put, takeLatest } from "redux-saga/effects";

const mockApi = args => {
    console.log("!!!PASS!!!", args);
    return "aaa";
};

export function* apiGenerator(action, argsa) {
    console.log("!!!!!", argsa);
    const { payload } = action;
    try {
        yield call(mockApi, payload);
        yield put({ type: "USER_FETCH_SUCCEEDED", user: "user" });
    } catch (e) {
        // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

function* rootSaga() {
    yield takeLatest("FETCH", apiGenerator, { hoge: "hoge" });
}

export default rootSaga;
