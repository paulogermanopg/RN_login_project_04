import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    height: ${height / 3}px;
`;

export const Button = styled.Pressable`
    background-color: #A9B0C3b3;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-width: 1;
    border-color: #fff;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 1.1;
`;

export const TextInputStyled = styled.TextInput`
    height: 50px;
    border-width: 1px;
    border-color: rgba(255,255,255,0.5);
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 25px;
    padding-left: 10px;
`;

export const FormButton = styled(Animated.View)`
    background-color: #A9B0C3b3;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-width: 1px;
    border-color: #fff;
    shadow-color: #aaa;
    shadow-offset: {
      width: 0px;
      height: 4px;
    };
    shadow-opacity: 0.5;
    shadow-radius: 3.84px;
    elevation: 5;
`;

export const CloseButtonContainer = styled(Animated.View)`
    height: 40px;
    width: 40px;
    justify-content: center;
    align-self: center;
    align-items: center;
    border-radius: 20px;
    shadow-color: #fff;
    shadow-offset: {
      width: 0px;
      height: 5px;
    };
    shadow-opacity: 0.34;
    shadow-radius: 6.27px;
    elevation: 1;
    background-color: #aaa;
    top: -20px;
`;
