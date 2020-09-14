import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import OverlayLoading from '../OverlayLoading';

import styled from 'styled-components';

export default function Conversor({ moedaA = 'BRL', moedaB = 'USD' }) {
    const [valueMoeda, setValueMoeda] = useState('');
    const [cotacao, setCotacao] = useState(null);
    const [newValue, setNewValue] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleConvert() {
        setLoading(true);
        const de_para = `${moedaA}_${moedaB}`;
        console.log(de_para);
        const url =
            `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=1934329ac124eb701bcc`;
        axios.get(url).then(response => {
            return response.data;
        }).then(response => {
            const currentCotacao = response[de_para];
            console.log(currentCotacao);
            setCotacao((parseFloat(currentCotacao).toFixed(2)));
            const valorConvertido = parseFloat(currentCotacao * valueMoeda).toFixed(2);
            setNewValue(valorConvertido);
            setLoading(false);
        })
    }

    return (
        <Card>
            {loading && <OverlayLoading />}
            <TitleWrapper>
                <Title>{moedaA}</Title>
                <Title style={{ marginBottom: 20 }}>
                    &rarr;
                </Title>
                <Title>{moedaB}</Title>
            </TitleWrapper>
            <CardWrapper>
                <TextField label="Valor" size="small" variant="outlined" value={valueMoeda} onChange={(e) => setValueMoeda(e.target.value)} className="inputValue" />
                <Button onClick={handleConvert} className="btn">
                    Converter
                </Button>
            </CardWrapper>
            <Results>
                {newValue && (
                    <Text>
                        Valor Convertido: {newValue}
                    </Text>
                )}
                {cotacao && (
                    <SubText>
                        Cotação: {cotacao}
                    </SubText>
                )}
            </Results>
        </Card>
    );
};

const Card = styled.div`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 150px;
  height: auto;
  width: 100%;
  text-align: center;
  position: relative;

  .btn {
    background-color: #0070f3;
    color: #fff;
    height: 40px;
    padding: 16px;
  }

  .btn:hover {
      transition: 0.5s;
      background-color: #fff;
      color: #0070f3;
  }

:hover,
:focus {
  color: #0070f3;
  border-color: #0070f3;
}

.inputValue {
    margin-right: 0.8rem;
}`;

const Results = styled.div`
    margin-top: 10px;
`;

const Title = styled.span`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

const SubText = styled.span`
    margin: 0;
    font-size: 1rem;
`;

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    justify-content: center;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    justify-content: center;
`;