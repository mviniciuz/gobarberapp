import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <Text>tela de perfil</Text >
    </Background>
  );
}

Profile.navigarionOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor} />

}
