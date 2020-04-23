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
import TransactionList from './src/components/screens/transaction_list'
import DetailTransaction from './src/components/screens/transaction_list'
import { View, Text } from 'react-native'
const AppNavigator = createStackNavigator({
  Home : TransactionList,
  Details : DetailTransaction
})

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <>
    <AppContainer />
    </>
  )
}

export default App;