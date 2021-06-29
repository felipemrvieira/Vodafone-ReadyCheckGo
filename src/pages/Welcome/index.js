import React from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  SubmitButton,
  TextButton,
  LogoContainer,
  Logo,
  LabelWelcome,
  SubmitButtonWrapper,
  FooterContainer,
  Version,
  AppTitle,
  InfoContainer,
  LogoVodafoneContainer,
  LogoVodafone,
  Info,
} from './styles';

export default function Welcome({navigation}) {
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
          <LabelWelcome>Bem vindo ao EvolutionCheck</LabelWelcome>
          <Info>
            Antes de poder executar e utilizar a aplicação, deverá verificar e
            confirmar algumas definições e autorizações. Por favor, indique a
            língua e orientação do dispositivo que deseja utilizar. Note que
            estas definições podem ser alteradas posteriormente em: "Menu -
            Configurações de sistema"
          </Info>
          <SubmitButtonWrapper>
            <SubmitButton onPress={() => navigation.navigate('DeviceLogin')}>
              <TextButton>Continuar</TextButton>
            </SubmitButton>
          </SubmitButtonWrapper>
        </InfoContainer>

        <FooterContainer>
          <Version>4.0 Beta</Version>

          <LogoVodafoneContainer>
            <LogoVodafone source={require('./images/vrcg_business_logo.png')} />
          </LogoVodafoneContainer>
        </FooterContainer>
      </Container>
    </ScrollView>
  );
}
