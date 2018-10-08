import { takeLatest, put } from 'redux-saga/effects';

export function* fetchUser(){
    const result = yield fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json());
    yield put({ type: 'FETCH_USERS_SUCCESS', item: result})

}

export default function* sagas(){
    yield takeLatest('FETCH_USERS', fetchUser);
}