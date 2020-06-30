import UserActiontypes from './user.types'
export const setCurrentUser = user => ({
    type:UserActiontypes.SET_CURRENT_USER,
    payload:user
});

export const googleSignInStart = () => ({
    type:UserActiontypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
    type:UserActiontypes.SIGN_IN_SUCCESS,
    payload:user
});

export const signInFailure = error => ({
    type:UserActiontypes.SIGN_IN_FAILURE,
    payload:error
});

export const emailSignInStart = emailAndPassword => ({
    type:UserActiontypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
});

export const checkUserSession = () => ({
    type:UserActiontypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type:UserActiontypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
    type:UserActiontypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = (error) => ({
    type:UserActiontypes.SIGN_OUT_FAILURE,
    payload:error
});

export const signUpStart = (userCredentials) => ({
    type:UserActiontypes.SIGN_UP_START,
    payload:userCredentials
});
 
export const signUpSuccess = ({user,additionalData}) => ({
    type:UserActiontypes.SIGN_UP_SUCCESS,
    payload:{user,additionalData}
});

export const signUpFailure = error => ({
    type:UserActiontypes.SIGN_UP_FAILURE,
    payload:error
})