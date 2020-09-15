import { useState } from 'react';
import {
  Button,
  TextField,
  IconButton,
  Tooltip,
  Snackbar,
  makeStyles,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { MdContentCopy } from 'react-icons/md';
import OverlayLoading from '../OverlayLoading';

import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Conversor({ moedaA = 'BRL', moedaB = 'USD' }) {
<<<<<<< HEAD
  const classes = useStyles();
=======
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
  const [valueMoeda, setValueMoeda] = useState('');
  const [cotacao, setCotacao] = useState(null);
  const [newValue, setNewValue] = useState(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false);
=======
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e

  function handleConvert() {
    setLoading(true);
    const de_para = `${moedaA}_${moedaB}`;
<<<<<<< HEAD
=======
    console.log(de_para);
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
    const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=1934329ac124eb701bcc`;
    axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        const currentCotacao = response[de_para];
<<<<<<< HEAD
=======
        console.log(currentCotacao);
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
        setCotacao(parseFloat(currentCotacao).toFixed(2));
        const valorConvertido = parseFloat(currentCotacao * valueMoeda).toFixed(
          2
        );
        setNewValue(valorConvertido);
        setLoading(false);
      });
  }
<<<<<<< HEAD
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Card>
      <div className={classes.root}>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleClose} severity="success">
            Copiado com sucesso!
          </Alert>
        </Snackbar>
      </div>
=======

  return (
    <Card>
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
      {loading && <OverlayLoading />}
      <TitleWrapper>
        <Title>{moedaA}</Title>
        <Title style={{ marginBottom: 20 }}>&rarr;</Title>
        <Title>{moedaB}</Title>
      </TitleWrapper>
      <CardWrapper>
        <TextField
<<<<<<< HEAD
          disabled={loading}
=======
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
          label="Valor"
          size="small"
          variant="outlined"
          value={valueMoeda}
          onChange={(e) => setValueMoeda(e.target.value)}
          className="inputValue"
        />
<<<<<<< HEAD
        <Button disabled={loading} onClick={handleConvert} className="btn">
=======
        <Button onClick={handleConvert} className="btn">
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
          Converter
        </Button>
      </CardWrapper>
      <Results>
<<<<<<< HEAD
        {newValue && (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>Valor Convertido: {newValue}</Text>
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(newValue);
                  handleClick();
                }}
              >
                <Tooltip
                  title="Copiar valor"
                  placement="right"
                  style={{ width: 20 }}
                >
                  <span>
                    <MdContentCopy />
                  </span>
                </Tooltip>
              </IconButton>
            </div>
          </>
        )}
        {cotacao && (
          <>
            <SubText>Cotação: {cotacao}</SubText>
            <IconButton
              onClick={() => {
                navigator.clipboard.writeText(newValue);
                handleClick();
              }}
            >
              <Tooltip
                title="Copiar valor"
                placement="right"
                style={{ width: 20 }}
              >
                <span>
                  <MdContentCopy />
                </span>
              </Tooltip>
            </IconButton>
          </>
        )}
=======
        {newValue && <Text>Valor Convertido: {newValue}</Text>}
        {cotacao && <SubText>Cotação: {cotacao}</SubText>}
>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
      </Results>
    </Card>
  );
}

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
  }

  .btn:hover {
    transition: 0.5s;
    background-color: #fff;
    color: #0070f3;
<<<<<<< HEAD
  }
  :hover,
  :focus {
    color: #0070f3;
    border-color: #0070f3;
  }

=======
  }

  :hover,
  :focus {
    color: #0070f3;
    border-color: #0070f3;
  }

>>>>>>> 385e0602e316d33444550c8e5c7fca3a1b3fae8e
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
