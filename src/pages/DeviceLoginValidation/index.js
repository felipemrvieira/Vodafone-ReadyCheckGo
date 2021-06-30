import React from 'react';
import {ScrollView} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {
  Container,
  LogoContainer,
  Logo,
  LabelWelcome,
  FooterContainer,
  Version,
  AppTitle,
  InfoContainer,
  LogoVodafoneContainer,
  LogoVodafone,
  Info,
} from './styles';

export default function DeviceLoginValidation({navigation}) {
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
          <LabelWelcome>Verificação</LabelWelcome>
          <Info>
            Aguarde por favor! A aplicação está a validar os dados de
            Verificação e Autorização na plataforma ReadyCheckGo. Uma vez
            submetidos e validados, esta informação deixará de ser apresentada.
          </Info>
          <ActivityIndicator size={80} color="#b90000" />
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
