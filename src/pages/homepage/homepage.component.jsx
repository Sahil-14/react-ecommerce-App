import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss';

const Homepage = ({history}) => (
    <div className='homepage'>
        <div className='directory-menu'>
            <Directory />
        </div>
    </div>
)


export default Homepage;