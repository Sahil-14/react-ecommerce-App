import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import { fetchCollectionStart } from '../../redux/shop/shop.actions';


const Shoppage = ({match,fetchCollectionStart}) => {

    useEffect(() => {
        fetchCollectionStart()
    },[fetchCollectionStart]);
    // this will render component only if we fire fetchCollectionStart, otherwise it will rerendeer it when there is chage in parent component

    return (

        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    )

}



const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(
    null,
    mapDispatchToProps)
    (Shoppage);

// ========== FIREBAE USING FETCH ====================


// fetch('https://firestore.googleapis.com/v1/projects/react-ecommerce-6b59a/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log("FETCH",collections))


