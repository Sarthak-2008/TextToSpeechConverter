import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    this.state.name === ''
      ? alert('The box is empty. please enter a word to continue')
      : Speech.speak(thingToSay);
  };
  render() {
    return (
      <View>
        <SafeAreaProvider>
          <Header
            centerComponent={{
              text: 'TextToSpeechConverter',
              style: { color: '#fff', fontSize: 18 },
            }}
          />
        </SafeAreaProvider>

        <TextInput
          style={styles.InputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

        <Image
          style={{ width: 150, height: 150, marginLeft: 100, marginTop: 40 }}
          source={require('./assets/man.jpg')}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.speak();
          }}>
          <Text style={styles.buttonText}>Click Here to Hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 5,
    borderRadius: 20,
    outline: 'none',
  },

  button: {
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
    backgroundColor: '#00bfff',
    padding: 5,
    width: 300,
    height: 70,
    borderWidth: 3,
  },

  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
});
