import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#45b1e9',
  };

  const { Handler, values, clearForm }= useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);




  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://satoflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    });

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ])

        clearForm(valoresIniciais);
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
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
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