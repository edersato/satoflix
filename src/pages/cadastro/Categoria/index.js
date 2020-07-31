import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#45b1e9',
  }
  const [categorias, setCategorias] = useState([])

  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, values) {

    setValues({
      ...values,
      [chave]: values,
    })
  }

  function Handler(infoEvento) {
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value);
  }


  useEffect(() => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAA');
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
}, [
      // setTimeout(() => {
      //   setCategorias([
      //     ...categorias,
      //     {
      //       id: 1,
      //       nome: '.Brazilidades',
      //       descricao: 'O melhor do Brasil',
      //       cor: '#cbd1ff'
      //     },
      //     {
      //       id: 2,
      //       nome: '.Rock',
      //       descricao: 'Rock paulera',
      //       cor: '#cbd1ff',
      //     },
      //   ]);
      // }, 4 * 1000)
  ]);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ])

        setValues(valoresIniciais);
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={Handler}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descrição"
          value={values.descricao}
          onChange={Handler}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={Handler}
        />

        <Button >
          Cadastrar
      </Button>

      </form>

      {categorias.length === 0 && <div>
        Carregando
      </div>}

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;