import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss'

const CollectionPage = ({collection}) => {
   const {title,items} = collection;
    return(
    <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
    {
        items.map(item => <CollectionItem key={items.id} item={item}/>)
    }
    </div>
    </div>
)}

const mapStateToProps = (state,ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
// this notation imp bcaz unlike other selectors this selector needs  apart of state depending on url parameter

// 1st parameter is  top level state and 2nd parameter is props of component
// second parameter get from routecomponent in shoppage

export default connect(mapStateToProps)(CollectionPage);