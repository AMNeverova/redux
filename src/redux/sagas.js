import { put, takeEvery } from 'redux-saga/effects';

const mainSaga = function* () {
    yield takeEvery('USERS_REQUESTED', fetchUsers)
}

const fetchUsers = function* () {
    const usersPromise = async function () {
        let response = await fetch('https://api.github.com/users')
        let users = await response.json();
        let requests = users.map(user => fetch(user.url));
        let responses = await Promise.all(requests);
        let usersFullDataList = await Promise.all(responses.map(resp => resp.json()));
        let usersRequiredDataList = usersFullDataList.map(({ id, name, location, login, avatar_url }) => {
            return {
                id, name, location, login, avatar_url,
                trashbinIsShown: false
            }
        })
        return usersRequiredDataList;
    }
    const data = yield usersPromise();
    yield put({ type: 'SET_USERS_TO_RENDER', data })
}

export default mainSaga;
