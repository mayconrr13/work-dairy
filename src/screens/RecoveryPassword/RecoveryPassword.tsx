/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { Background, Container, Message, RecoveryPasswordContent } from './styles';
import Link from '../../components/Link';
import Logo from '../../assets/svgs/logo.svg';
import { useNavigation } from '@react-navigation/native';

const RecoveryPassword = () => {
  const [email, setEmail] = useState('');
  const { navigate } = useNavigation();

  const handlePasswordRecovery = () => {
    if (!email) return;

    console.log({ email });
  };

  return (
    <Container>
      <Background source={require('../../assets/splash.jpg')} />
      <Logo style={{ marginTop: 96, marginRight: 'auto', marginLeft: 'auto' }} />
      <RecoveryPasswordContent>
        <Message>Esqueceu sua senha? Não tem problema.{'\n'}Insira seu email e redefina-a.</Message>

        <InputText
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="Informe aqui seu email"
        />

        <Button label="Recuperar senha" apparence="primary" onPress={handlePasswordRecovery} />

        <Link
          label="Voltar ao login"
          apparence="primary"
          onPress={() => navigate('Login' as never)}
        />
      </RecoveryPasswordContent>
    </Container>
  );
};

export default RecoveryPassword;
