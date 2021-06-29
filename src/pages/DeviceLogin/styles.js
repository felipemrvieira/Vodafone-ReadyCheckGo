import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
  background: #f00000;
  justify-content: space-between;
`;

export const AppTitle = styled.Text`
  color: #fff;
  font-family: 'CiutadellaRounded-Regular2';
  font-size: 26px;
  align-self: center;
  margin-bottom: 24px;
`;

export const InfoContainer = styled.View`
  /* flex: 1; */
  /* height: 100px; */
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 10px 5px 5px black;
  elevation: 15;
`;

export const LogoContainer = styled.View`
  height: 110px;
`;

export const Logo = styled.Image`
  flex: 1;
  width: undefined;
  height: undefined;
  resize-mode: contain;
`;

export const LabelWelcome = styled.Text`
  color: #3c3c3c;
  font-family: 'CiutadellaRounded-Regular2';
  font-size: 17px;
  padding: 5px;
  align-self: center;
  font-weight: bold;
  /* margin-bottom: 8px; */
`;

export const Info = styled.Text`
  color: #3c3c3c;
  font-family: 'CiutadellaRounded-Regular2';
  font-size: 12px;
  padding: 5px;
  align-self: center;
  margin-bottom: 24px;
`;

export const SubmitButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background: #f00000;
  border-radius: 10px;
  margin-top: 8px;
  border: 1px solid #b90000;
  border-bottom-color: #b90000;
  border-bottom-width: 4px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const TextButton = styled.Text`
  font-family: 'CiutadellaRounded-Regular2';
  color: white;
  font-size: 18px;
`;

export const FooterContainer = styled.View`
  margin-top: 48px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Version = styled.Text`
  font-family: 'CiutadellaRounded-Regular';
  text-align: center;
  color: white;
  align-self: center;
`;

export const LogoVodafoneContainer = styled.View``;

export const LogoVodafone = styled.Image`
  width: 150px;
`;

export const Form = styled.View`
  padding-bottom: 20px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-family: 'CiutadellaRounded-Regular';
  text-align: left;
  color: black;
  /* align-self: center; */
  font-size: 14px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  /* flex: 1; */
  /* width: 55%; */

  /* height: 50px; */
  font-family: 'CiutadellaRounded-Regular';
  /* padding: 0 20px; */
  margin-bottom: 30px;
  border-bottom-color: black;
  border-bottom-width: 1px;
  font-size: 14px;
`;
