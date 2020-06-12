import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuitem.componen.scss'



const MenuItem = ({ title, imageUrl, size,history,linkUrl,match }) => (
    <div 
     className={`${size} menu-item`} 
     onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
// it gives access to location,history and match
// otherwise we can acces  it onlu through parent component