import React from 'react';
import './custom-button.styles.scss';
import {CustomButtonContainer} from './custombutton.styles'

const CustomButton = ({children,...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)


export default CustomButton;


// <button className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
//         {children}
//     </button>