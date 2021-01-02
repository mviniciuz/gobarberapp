import React, { useMemo } from 'react';
import { formatRelative, parseISO, setSeconds, setMinutes, setHours } from 'date-fns'

import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';

import api from '~/services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');

  const value = navigation.getParam('value');
  const time = navigation.getParam('time');
  const date = navigation.getParam('date');

  const dateFormatted = useMemo(
    () => {
      return formatRelative(parseISO(value), new Date(), { locale: pt })
    }, [time]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: value,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? (__DEV__ ? provider.avatar.url.replace('http://localhost', 'http://10.0.2.2') : provider.avatar.url)
              : `https://api.adorable.io/avatars/50/${provider.name}.png`
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={() => handleAddAppointment()}> Confirmar Agendamento </SubmitButton>
      </Container>
    </Background >
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  )
});
