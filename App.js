import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import { AppStore } from './src/AppStore'

const App = () => {
	return (
		<Provider store={store}>
			<AppStore />
		</Provider>
	)
}

export default App
