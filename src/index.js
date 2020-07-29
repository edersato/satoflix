import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


const PaginaErro = () => (<div>
  <h1>Ah não, sua página foi raptada pelo Kahl Uork</h1>
  <h2>Enquanto você espera, ajude Hipsta a encontrar seu livro de poções e quem sabe, sua página</h2>
  
  <iframe height="600px" width="800px" src="https://editor.p5js.org/Eder_Sato/embed/SYVpVFLIz"></iframe>
</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>

    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={PaginaErro} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
