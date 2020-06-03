import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const AppStore = () => {
	const { view, text } = styles
	return (
		<View style={view}>
			<Text style={text}>Redux</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'grey',
	},
	text: {
		fontSize: 25,
		fontFamily: 'Roboto-Regular',
	},
})
