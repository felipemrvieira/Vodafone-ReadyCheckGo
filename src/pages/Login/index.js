import React from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TextButton,
  Divider,
  Line,
  TextDivider,
  LogoContainer,
  Logo,
  LabelEntrar,
  SocialButtonContainer,
  SocialButton,
  TextGoogleSocialButton,
  TextFacebookSocialButton,
  SocialButtonWrapper,
  SubmitButtonWrapper,
  TermsContainer,
  TermsText,
  TermsTextLink,
  AccountContainer,
  AccountText,
  AccountTextLink,
  IconSocialButton,
} from './styles';

export default function Login({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <LogoContainer>
          <Logo source={require('./logo.png')} />
        </LogoContainer>
        <LabelEntrar>Entrar</LabelEntrar>
        <Form>
          <Input
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            // value={newUser}
            // onChangeText={(text) => this.setState({newUser: text})}
            returnKeyType="next"
            // onSubmitEditing={this.handleAddUser}
          />
          <Input
            autoCapitalize="none"
            placeholder="Senha"
            // value={newUser}
            // onChangeText={(text) => this.setState({newUser: text})}
            returnKeyType="send"
            // onSubmitEditing={this.handleAddUser}
          />
          <SubmitButtonWrapper>
            <SubmitButton onPress={() => navigation.navigate('User')}>
              <TextButton>Entrar</TextButton>
            </SubmitButton>
          </SubmitButtonWrapper>
        </Form>
        <Divider>
          <Line />
          <TextDivider>Ou</TextDivider>
          <Line />
        </Divider>
        <SocialButtonContainer>
          <SocialButtonWrapper>
            <SocialButton>
              <IconSocialButton source={require('./facebook-icon.png')} />
              <TextFacebookSocialButton>Facebook</TextFacebookSocialButton>
            </SocialButton>
          </SocialButtonWrapper>

          <SocialButtonWrapper>
            <SocialButton>
              <IconSocialButton source={require('./google-icon.png')} />
              <TextGoogleSocialButton>Google</TextGoogleSocialButton>
            </SocialButton>
          </SocialButtonWrapper>
        </SocialButtonContainer>

        <TermsContainer>
          <TermsText>
            Ao entrar bo aplicativo você concorda com os nossos
          </TermsText>
          <TermsTextLink>Termos e Política de Privacidade</TermsTextLink>
        </TermsContainer>

        <AccountContainer>
          <AccountText>Não tem uma conta?</AccountText>
          <AccountTextLink>Criar conta</AccountTextLink>
        </AccountContainer>
      </Container>
    </ScrollView>
  );
}
