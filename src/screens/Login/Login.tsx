/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import GMail from '../../assets/svgs/gmail.svg';
import { Background, Container, LoginContent, LoginOptions, LoginOrText } from './styles';
import Link from '../../components/Link';
import Logo from '../../assets/svgs/logo.svg';
import InputPassword from '../../components/InputPassword';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();

  const handleLogin = () => {
    if (!email || !password) return;

    console.log({ email, password });
  };

  return (
    <Container>
      <Background source={require('../../assets/splash.jpg')} />
      <Logo style={{ marginTop: 96, marginRight: 'auto', marginLeft: 'auto' }} />
      <LoginContent>
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

        <Link
          label="Esqueceu sua senha?"
          apparence="primary"
          onPress={() => navigate('RecoveryPassword' as never)}
          textAlign="right"
        />

        <LoginOptions>
          <Button label="Login" apparence="primary" onPress={handleLogin} />
          <LoginOrText>ou</LoginOrText>
          <Button
            label="Google"
            apparence="special"
            icon={<GMail width={24} />}
            onPress={() => console.log('Login Gmail')}
          />
        </LoginOptions>

        <Link
          label="Ainda não é cadastrado? Registre-se"
          apparence="primary"
          onPress={() => navigate('SignUp' as never)}
        />
      </LoginContent>
    </Container>
  );
};

export default Login;
