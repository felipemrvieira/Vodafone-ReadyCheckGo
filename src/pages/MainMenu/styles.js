import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
  background: #fff;
  justify-content: space-between;
`;

export const MenuItem = styled.View`
  flex-direction: row;
  background: #fff;
  justify-content: space-between;
  margin-bottom: 22px;
  box-shadow: 10px 5px 5px black;
  elevation: 5;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const MenuIconContainer = styled(RectButton)`
  padding: 30px;
  background: #f0f0f0;
`;

export const MenuTextContainer = styled(LinearGradient).attrs({
  colors: ['#ef0000', '#bf0000', '#8d0000'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  padding: 20px 30px;
  flex: 1;
`;

export const MenuText = styled.Text`
  margin: 10px 0;
  color: #fff;
  font-family: 'CiutadellaRounded-Regular2';
  font-size: 24px;
`;

export const Header = styled.View`
  padding: 12px 20px 12px 20px;
  background: #fff;
  flex-direction: column;
  box-shadow: 10px 5px 5px #8b8b8b;
  elevation: 5;
`;

export const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  /* width: 55%; */

  /* height: 50px; */
  font-family: 'CiutadellaRounded-Regular';
  /* padding: 0 20px; */
  /* margin-bottom: 30px; */
  border-bottom-color: #757575;
  border-bottom-width: 1px;
  font-size: 14px;
`;

export const SeachIcon = styled(Icon)`
  align-self: center;
`;

export const User = styled.Text`
  font-family: 'CiutadellaRounded-Regular2';
  font-size: 16px;
  flex: 1;
  align-self: center;
`;

export const AppIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`;

export const Footer = styled.View`
  padding: 12px 20px 12px 20px;
  background: #fff;
  flex-direction: column;
  box-shadow: 10px 5px 5px black;
  elevation: 5;
`;

export const Version = styled.Text`
  font-family: 'CiutadellaRounded-Regular';
  text-align: center;
  color: #555555;
  align-self: center;
`;

export const FooterIcon = styled(Icon)`
  align-self: center;
`;
