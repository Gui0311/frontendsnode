import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import UsuariosTabela from './UsuariosTabela';
export default function Componente1() {


  const [contador, setContador] = useState(0);

  const [dados, setDados] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";


  function incContador() {
    setContador(contador + 1);
  }

  const decrement = function decContador() {
    setContador((contador) => contador
      - 1);
  }

  //comparacao com componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate");
  });

  //comparacao com componentDidMount (array de dependencias para ser Mount)
  useEffect(() => {
    console.log("componentDidMount");
    console.log("Requisitando dados por um fetch")
    fetch(url)
      .then(resp => resp.json())
      .then(resp => setDados(resp))

  }, []);



  return (
    <>
      <div>Componente de exemplo aula dev</div>
      <p> Paragrafo de teste</p>
      <button onClick={incContador}> Incrementar</button>
      <p>{contador}</p>
      <button onClick={decrement}> Decrementar</button>

      {/*dados.map((item) => {
        return(
          <div key={item.id}> 
          <span>{item.name} -- </span>
            <span>{item.email} </span>
          </div>
        );
      })   */}

<UsuariosTabela dados={dados} />

    </>
  );
}