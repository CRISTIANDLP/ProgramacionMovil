import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useRef } from 'react';

const Texto =({estilo}) => {
  const [contenido, setContenido] = useState('HolaMundo');
  const actualizarContenido=()=>{setContenido('State actualizo este texto')}
  return (<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>)
  }

export default function App() {
  return (
    <View style={styles.container}>

      <Texto estilo = {styles.red}/>
      <Texto estilo = {styles.green}/>
      <Texto estilo = {styles.blue}/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }, 

  text:{
    color: 'yellow',
    fontSize: 25,
    height:150,
    width:150,
  },

  red:{
    /*flex:1,*/
    backgroundColor:'red',

  },
  green:{
    /*flex:2,*/
    backgroundColor:'green',

  },
  blue:{
    /*flex:3,*/
    backgroundColor:'blue',

  },


});
