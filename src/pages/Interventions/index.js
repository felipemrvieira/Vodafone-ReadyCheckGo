import React from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  SearchContainer,
  Input,
  SeachIcon,
  Header,
  MenuContainer,
  User,
  AppIcon,
  Footer,
  Version,
  FooterIcon,
  MenuIcon,
  PageTitle,
  Intervention,
  InterventionIconContainer,
  InterventionIcon,
  InterventionInfo,
  InterventionInfoTitle,
  InterventionInfoSubtitle,
  Return,
} from './styles';

export default function Interventions({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <>
      <Header>
        <MenuContainer>
          <AppIcon source={require('./images/vrcg_logo_m1.png')} />

          <User>Felipe Maciel</User>
          <MenuIcon name="filter-alt" size={30} color="#555555" />
          <Return onPress={() => navigation.navigate('MainMenu')}>
            <MenuIcon name="reply" size={30} color="#555555" />
          </Return>
        </MenuContainer>
        <PageTitle>Intervenções</PageTitle>
        <SearchContainer>
          <SeachIcon name="search" size={30} color="#555555" />
          <Input
            autoCapitalize="none"
            placeholder="Pesquisar"
            // value={newUser}
            // onChangeText={(text) => this.setState({newUser: text})}
            returnKeyType="send"
            // onSubmitEditing={this.handleAddUser}
          />
        </SearchContainer>
      </Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <Intervention>
            <InterventionIconContainer color="#84e040 ">
              <InterventionIcon>1</InterventionIcon>
            </InterventionIconContainer>
            <InterventionInfo>
              <InterventionInfoTitle>XPTO</InterventionInfoTitle>
              <InterventionInfoSubtitle>
                Primeira Visita
              </InterventionInfoSubtitle>
            </InterventionInfo>
            <InterventionInfo>
              <InterventionInfoTitle>25/12/2021</InterventionInfoTitle>
              <InterventionInfoSubtitle>Em Execução</InterventionInfoSubtitle>
            </InterventionInfo>
          </Intervention>

          <Intervention>
            <InterventionIconContainer color="#febb03">
              <InterventionIcon>2</InterventionIcon>
            </InterventionIconContainer>
            <InterventionInfo>
              <InterventionInfoTitle>XPTO</InterventionInfoTitle>
              <InterventionInfoSubtitle>
                Primeira Visita
              </InterventionInfoSubtitle>
            </InterventionInfo>
            <InterventionInfo>
              <InterventionInfoTitle>25/12/2021</InterventionInfoTitle>
              <InterventionInfoSubtitle>Em Execução</InterventionInfoSubtitle>
            </InterventionInfo>
          </Intervention>

          <Intervention>
            <InterventionIconContainer color="#e5e9ec ">
              <InterventionIcon>3</InterventionIcon>
            </InterventionIconContainer>
            <InterventionInfo>
              <InterventionInfoTitle>XPTO</InterventionInfoTitle>
              <InterventionInfoSubtitle>
                Primeira Visita
              </InterventionInfoSubtitle>
            </InterventionInfo>
            <InterventionInfo>
              <InterventionInfoTitle>25/12/2021</InterventionInfoTitle>
              <InterventionInfoSubtitle>Em Execução</InterventionInfoSubtitle>
            </InterventionInfo>
          </Intervention>

          <Intervention>
            <InterventionIconContainer color="#e5e9ec ">
              <InterventionIcon>4</InterventionIcon>
            </InterventionIconContainer>
            <InterventionInfo>
              <InterventionInfoTitle>XPTO</InterventionInfoTitle>
              <InterventionInfoSubtitle>
                Primeira Visita
              </InterventionInfoSubtitle>
            </InterventionInfo>
            <InterventionInfo>
              <InterventionInfoTitle>25/12/2021</InterventionInfoTitle>
              <InterventionInfoSubtitle>Em Execução</InterventionInfoSubtitle>
            </InterventionInfo>
          </Intervention>

          <Intervention>
            <InterventionIconContainer color="#84e040">
              <InterventionIcon>5</InterventionIcon>
            </InterventionIconContainer>
            <InterventionInfo>
              <InterventionInfoTitle>XPTO</InterventionInfoTitle>
              <InterventionInfoSubtitle>
                Primeira Visita
              </InterventionInfoSubtitle>
            </InterventionInfo>
            <InterventionInfo>
              <InterventionInfoTitle>25/12/2021</InterventionInfoTitle>
              <InterventionInfoSubtitle>Em Execução</InterventionInfoSubtitle>
            </InterventionInfo>
          </Intervention>
        </Container>
      </ScrollView>
      <Footer>
        <MenuContainer>
          <Version>Beta Version</Version>
          <FooterIcon name="wifi" size={25} color="#555555" />
          <FooterIcon name="person" size={25} color="#bf0000" />
          <FooterIcon name="notifications" size={25} color="#555555" />
          <FooterIcon name="directions-car" size={25} color="#555555" />
          <FooterIcon name="pause" size={25} color="#555555" />
        </MenuContainer>
      </Footer>
    </>
  );
}
