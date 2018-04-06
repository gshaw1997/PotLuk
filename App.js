import React from 'react';
import { StyleSheet, Text,TextInput, Keyboard, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      // OPEN SANS
      'open-sans': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'open-sans-semi-bold': require('./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
      'open-sans-semi-bold-italic': require('./assets/fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf'),
      'open-sans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'open-sans-bold-italic': require('./assets/fonts/Open_Sans/OpenSans-BoldItalic.ttf'),
      'open-sans-extra-bold': require('./assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf'),
      'open-sans-extra-bold-italic': require('./assets/fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf'),
      'open-sans-italic': require('./assets/fonts/Open_Sans/OpenSans-Italic.ttf'),
      'open-sans-light': require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
      'open-sans-light-italic': require('./assets/fonts/Open_Sans/OpenSans-LightItalic.ttf'),

      // Caveat Brush
      'caveat-brush': require('./assets/fonts/Caveat_Brush/CaveatBrush-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  shuffleOptions() {
    alert('DINNER');
  }

  render() {
    return this.state.fontLoaded ? (
      <TouchableWithoutFeedback onPress = {
        Keyboard.dismiss
      }>
        <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, styles.defaultFont]}> Welcome to PotLuk! </Text>
        </View>
        <View  style={styles.textInputWrapper}>
            <TextInput
              style={[styles.textInput, styles.defaultFont]}
              placeholder="Enter Zipcode to Search"
              onChangeText={(text) => this.setState({ text })}
              keyboardType="numeric"
              maxLength="5"
            />
        </View>
          <TouchableOpacity
            style={styles.lukyButton}
            onPress={this.shuffleOptions}
          >
            <Text style={styles.lukyButtonText}>Feeling Luky</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    ): null;
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  defaultFont:{
    fontFamily: 'open-sans-semi-bold',
  },
  titleWrapper:{
    marginTop: 50
  },
  title:{
    fontSize: 30,
    fontWeight: "600"
  },
  textInputWrapper:{
    marginHorizontal: 50,
  },
  textInput:{
    height: 50,
    minWidth: '100%',
    width: '100%',
    marginTop: 150,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  lukyButton: {
    backgroundColor: '#176875',
    paddingVertical: 12,
    paddingHorizontal: 75,
    borderRadius: 3,
    position: 'absolute',
    bottom: 75
  },
  lukyButtonText: {
    color: '#FFF',
    fontFamily: 'caveat-brush',
    fontSize: 35,
  }
});
