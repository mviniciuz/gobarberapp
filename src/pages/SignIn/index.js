import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Input from '~/components/Input';
import Button from '~/components/Button';

import Background from '~/components/Background';

import { Container, Form, FormInput, SignLink, SignLinkText, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <FormInput
            icon="lock-outline"
            sercureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => { }}> Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background >
  );
}
