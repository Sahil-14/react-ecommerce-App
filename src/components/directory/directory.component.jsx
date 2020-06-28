import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({section}) => (
    <div className='directory-menu'>
        {
            section.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
   section:selectDirectorySection 
}) 

export default connect(mapStateToProps)(Directory);

