import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  const {view, text} = styles;
  return (
    <SafeAreaView style={view}>
      <View style={view}>
        <Text style={text}>Hello world</Text>
        <Text style={text}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Roboto-Italic',
  },
});
