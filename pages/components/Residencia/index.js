import { useState } from 'react';
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: '300px !important',
  },
});

import styled from 'styled-components';

export default function Residencia() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [notaFundatec, setNotaFundatec] = useState('');
  const [notaCurriculo, setNotaCurriculo] = useState(null);
  const [notaFinal, setNotaFinal] = useState(null);
  const [listData, setListData] = useState([]);

  const handleCalc = () => {
    const pesoFundatec = 6;
    const pesoCurriculo = 4;
    const fundatec = notaFundatec * pesoFundatec;
    const curriculo = notaCurriculo * pesoCurriculo;
    const notaUfpel = (fundatec + curriculo) / 10;
    setNotaFinal(notaUfpel);
    setNotaCurriculo('');
    setNotaFundatec('');
    setNome('');
    const objUser = {
      nome: nome,
      notaFinal: notaUfpel.toFixed(2),
    };
    const data = [...listData, objUser];
    setListData(data.sort((a, b) => b.notaFinal - a.notaFinal));
  };

  return (
    <Card>
      <TitleWrapper>
        <Title>Nota Residência UFPel - ONCOLOGIA</Title>
      </TitleWrapper>
      <CardWrapper>
        <TextField
          label="Nome"
          size="small"
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="inputValue"
        />
      </CardWrapper>
      <CardWrapper>
        <TextField
          type="number"
          label="Nota Fundatec"
          size="small"
          variant="outlined"
          value={notaFundatec || ''}
          onChange={(e) => setNotaFundatec(Number(e.target.value))}
          className="inputValue"
        />
      </CardWrapper>
      <CardWrapper>
        <TextField
          type="number"
          label="Nota Currículo"
          size="small"
          variant="outlined"
          value={notaCurriculo || ''}
          onChange={(e) => setNotaCurriculo(Number(e.target.value))}
          className="inputValue"
        />
      </CardWrapper>
      {notaFinal && (
        <CardWrapper>
          <Text>Nota Final: {notaFinal}</Text>
        </CardWrapper>
      )}

      <Button onClick={handleCalc} className="btn">
        Calcular
      </Button>
      {listData.length > 0 && (
        <Results>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Classificação</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Nota</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{`${index + 1}º`}</TableCell>
                    <TableCell>{data.nome}</TableCell>
                    <TableCell align="left">{data.notaFinal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Results>
      )}
    </Card>
  );
}

const Card = styled.div`
  margin: 1rem 1rem 4rem;
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
  max-width: 980px;

  .btn {
    margin-top: 20px;
    background-color: #0070f3;
    color: #fff;
    height: 40px;
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
  }
`;

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
