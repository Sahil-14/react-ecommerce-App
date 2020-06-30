import { createSelector } from 'reselect';

const selectUser = state => state.user;


// first argumenyt can be a arrau of input selectors,second arg is a return of 1st arg
// instead of passing array we can also pass it as indivisual argument
export const selectCurrentUser = createSelector(
[selectUser],
user => user.currentUser
);