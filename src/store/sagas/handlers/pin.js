import { call, put } from 'redux-saga/effects'
import { requestGetPin } from "../requests/pin";
import { setPin } from "../../pin/actions";

export function* handleGetPin(action) {
    try {
        const response = yield call(requestGetPin);
        const { data } = response;
        yield put(setPin(data));
    } catch (e) {
        console.log(e)
    }
}