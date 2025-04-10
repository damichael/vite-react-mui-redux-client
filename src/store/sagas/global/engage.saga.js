import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'axios';

import {
    ENGAGE_REQUEST,
    engageSuccess,
    engageFailure,
} from 'src/store/actions/global.actions';

function callApi() {
    const url = 'pythonSvr/callPythonServer';

    const baseUrl = 'https://node-express-api-server.onrender.com/';

    const config = {
        method: 'get',
        baseURL: baseUrl,
        url,
    };

    return new Promise((resolve, reject) => {
        request(config)
            .then((response) => {
                ('saga.response', response.data)
                resolve(response.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

function* requestSaga(action) {
    try {
        const resp = yield call(callApi, action.payload);
        yield put(engageSuccess(resp));

    } catch (error) {
        console.error('saga.error', error);
        yield put(engageFailure(error));
    }
}

export default function* requestMonitor() {
    yield takeLatest(ENGAGE_REQUEST, requestSaga);
}
