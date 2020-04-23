/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from  'react-redux';
import store from './src/components/redux/store'
import TransactionList from './src/components/screens/transaction_list'
import DetailTransaction from './src/components/screens/transaction_list'


const AppNavigator = createStackNavigator({
  Home : TransactionList,
  Details : DetailTransaction
})

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store = { store } >
    <AppContainer />
    </Provider>
  )
}

export default App;