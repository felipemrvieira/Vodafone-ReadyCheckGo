import React from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  MenuItem,
  MenuIconContainer,
  MenuTextContainer,
  MenuText,
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
} from './styles';

export default function MainMenu({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <>
      <Header>
        <MenuContainer>
          <AppIcon source={require('./images/vrcg_logo_m1.png')} />

          <User>Felipe Maciel</User>
          <SeachIcon name="menu" size={30} color="#555555" />
        </MenuContainer>
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
          <MenuItem
            title="interventions"
            onPress={() => navigation.navigate('Interventions')}>
            <MenuIconContainer>
              <Icon name="fact-check" size={40} color="#555555" />
            </MenuIconContainer>
            <MenuTextContainer>
              <MenuText>Intervenções</MenuText>
            </MenuTextContainer>
          </MenuItem>
          <MenuItem>
            <MenuIconContainer>
              <Icon name="work" size={40} color="#555555" />
            </MenuIconContainer>
            <MenuTextContainer>
              <MenuText>Tarefas</MenuText>
            </MenuTextContainer>
          </MenuItem>
          <MenuItem>
            <MenuIconContainer>
              <Icon name="badge" size={40} color="#555555" />
            </MenuIconContainer>
            <MenuTextContainer>
              <MenuText>Meus dados</MenuText>
            </MenuTextContainer>
          </MenuItem>
          <MenuItem>
            <MenuIconContainer>
              <Icon name="category" size={40} color="#555555" />
            </MenuIconContainer>
            <MenuTextContainer>
              <MenuText>Objectos</MenuText>
            </MenuTextContainer>
          </MenuItem>
          <MenuItem>
            <MenuIconContainer>
              <Icon name="announcement" size={40} color="#555555" />
            </MenuIconContainer>
            <MenuTextContainer>
              <MenuText>Alertas</MenuText>
            </MenuTextContainer>
          </MenuItem>
          <MenuItem>
            <MenuIconContainer>
              <Icon name="bar-chart" size={40} color="#555555" />
            </MenuIconContainer>
            <MenuTextContainer>
              <MenuText>Relatórios</MenuText>
            </MenuTextContainer>
          </MenuItem>
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
