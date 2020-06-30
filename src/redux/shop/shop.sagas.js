import { takeLatest, call, put, all } from 'redux-saga/effects';
// takeEvery listen for every action
// call is the effects inside generator that invikes the method
// saga use put instead of dispatch keyword
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

import ShopActionsType from './shop.types';

export function* fetchCollectionAsync() {
    yield console.log("sahil");

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        // const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // we can use it as above written,but we wnat to yield this, incase this call takes longer time than we think
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}


//takeEvery creates a non blocking call in order to not stop our application to continue running running up 
//it does not stop js for fetching result,and we can also stop task to complete previous task
// it will pause whenever any specific action type comes in
export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionsType.FETCH_COLLECTION_START,
        fetchCollectionAsync
    )
}

export function* shopSagas(){
    yield all([call(fetchCollectionStart)]);
}
