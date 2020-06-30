import ShopActionsType from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
    type: ShopActionsType.FETCH_COLLECTION_START,

});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionsType.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type:ShopActionsType.FETCH_COLLECTION_FAILURE,
    payload:errorMessage
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        // this will dispatch fetchCollectionStart to the shop.reducer and corresponding case will get active
        //ie. it ill set isFetching to true
        collectionRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                // we are setting second action which takes one payload for ferther process
                dispatch(fetchCollectionsSuccess(collectionsMap))
            }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}