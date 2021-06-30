import React from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  SubmitButton,
  ReturnButtonWrapper,
  TextButton,
  LogoContainer,
  Logo,
  LabelWelcome,
  ButtonsContainer,
  SubmitButtonWrapper,
  FooterContainer,
  Version,
  AppTitle,
  InfoContainer,
  LogoVodafoneContainer,
  LogoVodafone,
  Info,
  Form,
  InputContainer,
  Label,
  Input,
} from './styles';

export default function DeviceLogin({navigation}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <AppTitle>Vodafone ReadyCheckGo</AppTitle>
        <InfoContainer>
          <LogoContainer>
            <Logo source={require('./images/icon_100px.png')} />
          </LogoContainer>
          <LabelWelcome>Autorização da aplicação</LabelWelcome>
          <Info>
            Em caso de dúvida contacte o Administrador de sistema para facultar
            a respectiva informação.
          </Info>
          <Form>
            <InputContainer>
              <Label>Código da instância</Label>
              <Input
                autoCapitalize="none"
                placeholder="Adicionar usuário"
                // value={newUser}
                // onChangeText={(text) => this.setState({newUser: text})}
                returnKeyType="next"
                // onSubmitEditing={this.handleAddUser}
              />
            </InputContainer>
            <InputContainer>
              <Label>Código de autorização</Label>

              <Input
                autoCapitalize="none"
                placeholder="Senha"
                // value={newUser}
                // onChangeText={(text) => this.setState({newUser: text})}
                returnKeyType="send"
                // onSubmitEditing={this.handleAddUser}
              />
            </InputContainer>

            <ButtonsContainer>
              <ReturnButtonWrapper>
                <SubmitButton onPress={() => navigation.goBack()}>
                  <TextButton>Voltar</TextButton>
                </SubmitButton>
              </ReturnButtonWrapper>

              <SubmitButtonWrapper>
                <SubmitButton onPress={() => navigation.navigate('Welcome')}>
                  <TextButton>
                    <Icon name="qr-code-2" size={30} color="white" />
                  </TextButton>
                </SubmitButton>
              </SubmitButtonWrapper>

              <SubmitButtonWrapper>
                <SubmitButton
                  onPress={() => navigation.navigate('DeviceLoginValidation')}>
                  <TextButton>Continuar</TextButton>
                </SubmitButton>
              </SubmitButtonWrapper>
            </ButtonsContainer>
          </Form>
        </InfoContainer>

        <FooterContainer>
          <Version>Beta version</Version>

          <LogoVodafoneContainer>
            <LogoVodafone source={require('./images/vrcg_business_logo.png')} />
          </LogoVodafoneContainer>
        </FooterContainer>
      </Container>
    </ScrollView>
  );
}
