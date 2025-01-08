import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';

const {height, width} = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height / 2} width={width}>
          <Image
            href={require('./assets/moon.jpg')}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
        <View style={styles.closeButtonContainer}>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Resgistrar</Text>
        </View> */}
        <View style={styles.formInputContainer}>
          <TextInput placeholder="E-mail" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Senha" style={styles.textInput} />

          <View style={styles.formButton}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
  button: {
    backgroundColor: '#A9B0C3b3',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1.1,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: '#A9B0C3b3',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70,
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: '#aaa',
  },
});
