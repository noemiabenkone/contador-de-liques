import React, { useState } from 'react';

function ContadorDeCliques() {
  
  const [cliques, setCliques] = useState(0);

 
  const incrementarCliques = () => {
    setCliques(cliques + 1);
  };

 
  const resetarCliques = () => {
    setCliques(0);
  };

  return (
    <div className='conteiner'>
      <h1>Contador de Cliques</h1>
      <p>Número de cliques: {cliques}</p>
      <button onClick={incrementarCliques}>Clique Aqui</button>
      <button onClick={resetarCliques}>Resetar</button>
    </div>
  );
}

export default ContadorDeCliques;