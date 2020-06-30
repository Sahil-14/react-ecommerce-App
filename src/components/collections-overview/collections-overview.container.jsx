import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component.component';


const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview) // eveluate from R -> L
// it will first evaluate withspinner by passing CollectionsOverview to that and then pass this to the     connect(mapStateToProps),

// connect(mapStateToProps)(withSpinner(CollectionsOverview));
//this works inside out


export default CollectionsOverviewContainer;