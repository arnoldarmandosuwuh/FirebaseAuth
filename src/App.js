/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider, useSelector } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import { LogBox } from 'react-native'
import Router from './router'
import { Loading } from './components'
import store from './redux/store'

const MainApp = () => {
  const stateGlobal = useSelector((state) => state)
  LogBox.ignoreLogs(['Setting a timer'])
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
