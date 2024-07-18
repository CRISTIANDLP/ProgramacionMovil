import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function homeScreen({navigation}){
  return(
    <view>
      <Text> Home Screen</Text>
      <Button title="Ir a detalles" />
    </view>

  );

}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});