import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
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
          type="text"
          name="descrição"
          value={values.descricao}
          onChange={Handler}
        />

        {/*<div>
          <label>
            Descrição:
              <textarea
              type="text"
              value={values.descricao}
              name="desc"
              onChange={Handler}
            />
          </label>
        </div>*/}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={Handler}
        />

        {/*<div>
        <label>
            Cor:
              <input
                type="color"
                value={values.cor}
                name="cor"
                onChange={Handler}
            />
          </label>
        </div>*/}


        <button>
          Cadastrar
      </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
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