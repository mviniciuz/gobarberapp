import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Text>tela de Dashboard</Text>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor} />
}