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
