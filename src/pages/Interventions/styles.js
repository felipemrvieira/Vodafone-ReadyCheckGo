import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
  background: #e5e9ec;
  justify-content: space-between;
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
  background: #f2f2f2;
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

export const MenuIcon = styled(Icon)`
  align-self: center;
  margin-left: 12px;
`;

export const PageTitle = styled.Text`
  font-family: 'CiutadellaRounded-Bold';
  text-align: center;
  color: #f00000;
  align-self: center;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 12px;
`;

export const Intervention = styled.View`
  padding: 25px 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 5px 5px 5px black;
  elevation: 0;
  border-radius: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InterventionIconContainer = styled.View`
  background: ${props => props.color};
  height: 35px;
  width: 35px;
  border-radius: 100px;
  flex-direction: row;
  justify-content: center;
`;
export const InterventionIcon = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  /* background: red; */
`;

export const InterventionInfo = styled.View``;

export const InterventionInfoTitle = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  /* background: red; */
`;

export const InterventionInfoSubtitle = styled.Text`
  color: #c8c8c8;
  font-size: 14px;
  text-align: left;
  /* background: red; */
`;

export const Return = styled(RectButton)`
  justify-content: center;
  text-align: center;
  border-radius: 50px;
`;
