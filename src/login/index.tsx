import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
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
import * as S from './styles';

const {height, width} = Dimensions.get('window');
export default function Login() {
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
    <S.Container>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPhatId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require('../../assets/moon.jpg')}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPhatId)"
          />
        </Svg>
        <S.CloseButtonContainer style={closeButtonContainerStyle}>
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </S.CloseButtonContainer>
      </Animated.View>

      <S.ButtonContainer>
        <Animated.View style={buttonsAnimatedStyle}>
          <S.Button onPress={handlerLogin}>
            <S.ButtonText>Login</S.ButtonText>
          </S.Button>
        </Animated.View>

        <Animated.View style={buttonsAnimatedStyle}>
          <S.Button onPress={handlerRegister}>
            <S.ButtonText>Resgistrar</S.ButtonText>
          </S.Button>
        </Animated.View>

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <S.TextInputStyled placeholder="E-mail" />
          {isRegister && <S.TextInputStyled placeholder="Nome" />}

          <S.TextInputStyled placeholder="Senha" />

          <S.FormButton style={formButtonAnimatedStyle}>
            <Pressable
              onPress={() =>
                (formButtonScale.value = withSequence(
                  withSpring(1.5),
                  withSpring(1),
                ))
              }>
              <S.ButtonText>{isRegister ? 'REGISTRAR' : 'ENTRAR'}</S.ButtonText>
            </Pressable>
          </S.FormButton>
        </Animated.View>
      </S.ButtonContainer>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
  },
});
