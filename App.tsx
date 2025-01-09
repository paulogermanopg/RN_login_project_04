import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
export default function App() {
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.8, 0],
    );
    return {
      transform: [
        {
          translateY: withTiming(interpolation, {
            duration: 1000,
          }),
        },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
      transform: [
        {rotate: withTiming(interpolation + 'deg', {duration: 1000})},
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, {duration: 800}))
          : withTiming(0, {duration: 300}),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}],
    };
  });

  const handlerLogin = () => {
    imagePosition.value = 0;
    if (isRegister) {
      setIsRegister(false);
      runOnJS(setIsRegister)(false);
    }
  };

  const handlerRegister = () => {
    imagePosition.value = 0;
    if (!isRegister) {
      setIsRegister(true);
      runOnJS(setIsRegister)(true);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPhatId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require('./assets/moon.jpg')}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPhatId)"
          />
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={handlerLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={handlerRegister}>
            <Text style={styles.buttonText}>Resgistrar</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput placeholder="E-mail" style={styles.textInput} />
          {isRegister && (
            <TextInput placeholder="Nome" style={styles.textInput} />
          )}

          <TextInput placeholder="Senha" style={styles.textInput} />

          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={() => formButtonScale.value = withSequence(withSpring(1.5), withSpring(1))}>
              <Text style={styles.buttonText}>
                {isRegister ? 'REGISTRAR' : 'LOGIN'}
              </Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
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
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
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
    top: -20,
  },
});
