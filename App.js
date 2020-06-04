import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import { AppStore } from './src/AppStore'
import { View, Text, StyleSheet } from 'react-native'

export const App = () => {
	return (
		<View>
			<Text>Redux</Text>
		</View>
	)
}

// const App = () => {
// 	return (
// 		// <Provider store={store}>
// 			<AppStore />
// 		</Provider>
// 	)
// }

export default App
