import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions'
import './collection-item.styles.scss';

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return(
    <div className='collection-item'>
        <div
            className='image'
            style={{backgroundImage:`url(${imageUrl})`}}/>
        
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>
        <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem:item => dispatch(addItem(item))
})

// whenever we call the addIem function it will take item as a property pass it into addItem action creater gives us back that object where the type is equal to addItem
// and the payload is equal to item that are passed in, and then we will dispatch that new object into the store and it will go through our redux flow
export default connect(null,mapDispatchToProps)(CollectionItem);