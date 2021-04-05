import React, { useState } from 'react';
import axios from 'axios';
import OverlayLoading from '../OverlayLoading';

function Covid() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

 async function getCasosCovid() {
    setLoading(true);
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const response = await axios.get(url);
    console.log(response.data.data);
    if (response.data.data) {
      setDados(response.data.data);
    }
    setLoading(false);
  }

  return (
    <div>
      <h1>Covid</h1>
      {loading && (
        <OverlayLoading />
      )}
      {dados && !loading &&(
        <div>
          <div>
            País: {dados.country}
          </div>
          <div>
            Mortos: {dados.deaths}
          </div>
          <div>
            Recuperados: {dados.recovered}
          </div>
        </div>
      )}
     {!loading && (
        <button onClick={getCasosCovid}>
        Buscar dados covid
      </button>
     )}
    </div>
  );
}

export default Covid;