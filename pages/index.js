import Head from 'next/head'
import styled from 'styled-components';
import Conversor from './components/Conversor';


export default function Home() {
  return (
    <Container>
      <Head>
        <title>Conversor de Moedas - NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>
        Conversor de Moedas
      </Title>
      <ConversorArea>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
        <Conversor moedaA="CAD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="CAD" />
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="CAD" />
      </ConversorArea>

    </Container>
  )
}

const Container = styled.div`
 min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const ConversorArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1040px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
}

`;