import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 40px 30px;
  background: #fff;
`;

export const LogoContainer = styled.View`
  flex: 1;
  height: 180px;
  padding: 10px;
  margin-bottom: 18px;
`;

export const Logo = styled.Image`
  /* max-width: 100%; */
  /* height: 1;
  width: 20%;
  resize-mode: contain;
  padding: 124px;
  align-self: center; */
  flex: 1;
  width: undefined;
  height: undefined;
  resize-mode: contain;
`;

export const LabelEntrar = styled.Text`
  color: #3c3c3c;
  font-family: 'CiutadellaRounded-Regular2';
  text-transform: capitalize;
  font-size: 32px;
  padding: 6px 18px;
  align-self: center;
  margin-bottom: 12px;
`;

export const Form = styled.View`
  padding-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 60px;
  font-family: 'CiutadellaRounded-Regular';

  background: #e8e8e8;
  border-radius: 20px;
  padding: 20px;
  border: 2px solid #d3d2d2;
  margin-bottom: 10px;
  font-size: 18px;
`;
export const SubmitButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background: #775ba3;
  border-radius: 15px;
  margin-top: 8px;
  border: 1px solid #442d65;
  border-bottom-color: #442d65;
  border-bottom-width: 4px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const TextButton = styled.Text`
  font-family: 'CiutadellaRounded-Regular2';
  color: white;
  font-size: 20px;
  text-transform: uppercase;
`;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  flex: 1;
  height: 2px;
  background-color: #cccccc;
`;

export const TextDivider = styled.Text`
  color: #cccccc;
  font-family: 'CiutadellaRounded-Regular';
  text-transform: uppercase;
  font-size: 18px;
  padding: 6px 18px;
`;

export const SocialButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 45%;
  background: #fff;
  border-radius: 15px;
  margin-top: 10px;
  border: 1px solid #e0e0e0;
  border-bottom-color: #e0e0e0;
  border-bottom-width: 4px;
`;

export const SocialButton = styled(RectButton)`
  justify-content: center;
  flex-direction: row;
  /* flex: 1; */
  align-items: center;
  border-radius: 15px;
  width: 100%;
  background: #fff;
  padding: 12px 20px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const TextFacebookSocialButton = styled.Text`
  text-transform: uppercase;
  font-family: 'CiutadellaRounded-Regular2';
  color: #3b5998;
`;

export const TextGoogleSocialButton = styled.Text`
  text-transform: uppercase;
  font-family: 'CiutadellaRounded-Regular2';
  color: #4385f5;
`;

export const IconSocialButton = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  resize-mode: contain;
`;

export const TermsContainer = styled.View`
  margin-top: 48px;
`;

export const TermsText = styled.Text`
  font-family: 'CiutadellaRounded-Regular';
  text-align: center;
  color: #898989;
`;

export const TermsTextLink = styled.Text`
  font-family: 'CiutadellaRounded-Regular';
  text-align: center;
  color: #525151;
`;

export const AccountContainer = styled.View`
  margin-top: 48px;
  flex-direction: row;
  justify-content: center;
`;

export const AccountText = styled.Text`
  font-family: 'CiutadellaRounded-Regular2';
  text-align: center;
  margin-right: 6px;
  color: #2e2e2e;
  font-size: 18px;
`;

export const AccountTextLink = styled.Text`
  font-family: 'CiutadellaRounded-Regular2';
  text-align: center;
  text-transform: uppercase;
  color: #775ba3;
  font-size: 18px;
`;
