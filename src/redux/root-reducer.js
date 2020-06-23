import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// we are getting local storage which will actually atore on window object,there is different path for session storage
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']   // this store our cart reducer
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer);
