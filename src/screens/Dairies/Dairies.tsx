import React from 'react';
import {
  Container,
  Content,
  DetailBar,
  DetailText,
  EmptyContainer,
  EmptyMessage,
  MainText,
  PageTitle,
  Section,
  SectionTitle,
} from './styles';
import { FlatList, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { customTheme } from '../../theme/customTheme';
import { mockDiaries } from './mockDiaries';
import Dairy from './Dairy';

const Dairies = () => {
  const data = mockDiaries;

  return (
    <Container>
      <Content>
        <PageTitle>
          <MainText>Olá, Maycon!</MainText>
          <DetailText>Seja bem-vindo.</DetailText>
        </PageTitle>

        <Section>
          <SectionTitle>Meus diários</SectionTitle>
          <DetailBar />
        </Section>

        <ScrollView contentContainerStyle={{ flexDirection: 'row' }}>
          {!data.length ? (
            <EmptyContainer>
              <Feather name="frown" size={48} color={customTheme.colors.white} />
              <EmptyMessage>
                Parece que você ainda não possui nenhum diário{'\n'}Começe a monitorar suas obras
                agora mesmo.
              </EmptyMessage>
            </EmptyContainer>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item: dairy }) => <Dairy {...dairy} key={dairy.name} />}
            />
          )}
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Dairies;
