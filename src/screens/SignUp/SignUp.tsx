/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { Background, Container, InputsSection, Message, SignUpContent } from './styles';
import Link from '../../components/Link';
import Logo from '../../assets/svgs/logo.svg';
import InputPassword from '../../components/InputPassword';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();

  const handleLogin = () => {
    if (!email || !password || !name) return;

    console.log({ name, email, password });
  };

  return (
    <Container>
      <Background source={require('../../assets/splash.jpg')} />
      <Logo style={{ marginTop: 96, marginRight: 'auto', marginLeft: 'auto' }} />
      <SignUpContent>
        <Message>
          Cadatre-se agora mesmo e tenha mais controle sobre seus gastos durante a execução das
          obras!
        </Message>

        <InputsSection>
          <InputText
            label="Nome"
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Seu nome aqui"
          />
          <InputText
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Seu melhor email"
          />
          <InputPassword
            label="Senha"
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Sua senha aqui"
          />
        </InputsSection>

        <Button label="Registrar-se" apparence="primary" onPress={handleLogin} />
        <Link
          label="Já é cadastrado? Faça log in."
          apparence="primary"
          onPress={() => navigate('Login' as never)}
        />
      </SignUpContent>
    </Container>
  );
};

export default SignUp;
