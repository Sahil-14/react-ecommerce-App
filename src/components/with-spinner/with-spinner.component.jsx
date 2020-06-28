import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

// const withSpinner = WrappedComponent => ({isLoading,...otherProps}) => {
//     return isLoading ? (
//         <SpinnerOverlay>
//         <SpinnerContainer/>
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps} />
//     )
// }

const withSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            )
    }
    return Spinner;
};

// this way we pass through the props to the component we wrap
export default withSpinner;