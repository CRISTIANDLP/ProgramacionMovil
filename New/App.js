import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('valor Default');
  const [submit, setSubmit] = useState('');

  return (
    <View style={styles.container}>
      <Text>Componente TextInput: {submit}</Text>
      <TextInput style={styles.input} placeholder='Escribe texto....' onChangeText={(t) => setText(t)} defaultValue={text} />

      {/* Button */}
      <Button title='Presioname...' onPress={() => { setSubmit(text); alert('Texto Enviado'); }} />

      {/* TouchableOpacity */}
      <TouchableOpacity style={styles.touchableButton} onPress={() => { setSubmit(text); alert('Texto Enviado'); }}>
        <Text style={styles.touchableButtonText}>Presioname...</Text>
      </TouchableOpacity>

      {/* TouchableHighlight */}
      <TouchableHighlight style={styles.highlightButton} underlayColor="darkblue" onPress={() => { setSubmit(text); alert('Texto Enviado'); }}>
        <Text style={styles.highlightButtonText}>Presioname...</Text>
      </TouchableHighlight>

      {/* TouchableWithoutFeedback */}
      <TouchableWithoutFeedback onPress={() => { setSubmit(text); alert('Texto Enviado'); }}>
        <View style={styles.withoutFeedbackButton}>
          <Text style={styles.withoutFeedbackButtonText}>Presioname...</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Pressable */}
      <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'darkblue' : 'blue',
          padding: 10,
          borderRadius: 5,
        }
      ]} onPress={() => { setSubmit(text); alert('Texto Enviado'); }}>
        <Text style={styles.pressableButtonText}>Presioname...</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  touchableButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  touchableButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  highlightButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  highlightButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  withoutFeedbackButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  withoutFeedbackButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressableButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
