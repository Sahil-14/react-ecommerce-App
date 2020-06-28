import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
// withspinner takes one component
const CollectionsPagewithSpinner = withSpinner(CollectionPage)

class Shoppage extends React.Component {
    state = {
        loading: true
    };
    unsubscribFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        fetch('https://firestore.googleapis.com/v1/projects/react-ecommerce-6b59a/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log("FETCH",collections))
        // collectionRef.get().then(
        //     snapshot => {
        //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //         updateCollections(collectionsMap);
        //         this.setState({ loading: false })
        //     }
        // )

    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionsPagewithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shoppage);

