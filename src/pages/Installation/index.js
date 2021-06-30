import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import {
  Container,
  LabelWelcome,
  FooterContainer,
  Version,
  AppTitle,
  InfoContainer,
  LogoVodafoneContainer,
  LogoVodafone,
  ProgressLabel,
  ProgressContainer,
} from './styles';

export default function Installation({navigation}) {
  const [progress1, setProgress1] = useState(0.0);
  const [progress2, setProgress2] = useState(0.0);

  useEffect(() => {
    const updateProgress = () => setProgress2(progress2 + 0.01);
    if (progress2 < 1.0) {
      setTimeout(updateProgress, 5);
    }
  }, [progress2]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <AppTitle>Vodafone ReadyCheckGo</AppTitle>
        <InfoContainer>
          <LabelWelcome>
            Instalação e verificação de estruturas e registros base
          </LabelWelcome>
          <ProgressContainer>
            <ProgressLabel>
              A carregar dados na base local... 45/46
            </ProgressLabel>
            <ProgressBar progress={1} color={'#1a73e8'} />
          </ProgressContainer>

          <ProgressContainer>
            <ProgressLabel>
              A executar procedimentos de actualização... 10/14
            </ProgressLabel>
            <ProgressBar progress={progress2} color={'#1a73e8'} />
          </ProgressContainer>
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
