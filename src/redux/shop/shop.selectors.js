import { createSelector } from 'reselect';



const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.Keys[collections].map(key => collections[key])
    //Object.Keys :this method gives the array of keys of object
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )


/**
 * Our url parameter is string and the id we have to match is a number
 * so we write a map COLLECTION_ID_MAP which object whaere string value goes to id
 *
 */

// const COLLECTION_ID_MAP = {
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

// createSelector(
//     [selectCollections],
//     collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
// )