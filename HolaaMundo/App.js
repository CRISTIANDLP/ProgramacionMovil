import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';


export default function App() {
  const[text,setText]=useState('valor Default')
  const[submit,setSubmit]=useState('')


  return (
    <View style={styles.container}>

      <ScrollView style={styles.ScrollView}>

      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>
      <Text>Componente TextInput: {submit}</Text>


      <TextInput style={styles.input} placeholder='Escribe texto....' onChangeText={(t)=>setText(t)} defaultValue={text} />

      <Button title = 'Presioname...' onPress={()=>{ setSubmit(text);  alert('Texto Enviado')}}/>

      </ScrollView>
    
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
    justifyContent: 'center',
  },
  input:{
    /*backgroundColor:'#dfd7fd',*/
    width:'80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor:'red',

  },

  ScrollView:{
    width:Dimensions.get('window').width

  }

});
