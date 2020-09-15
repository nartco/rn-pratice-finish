
import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';
import authReducer from './store/reducers/auth'
import NavigationContainer from './navigation/NavigationContainer'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));




export default function App() {
  
 
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
