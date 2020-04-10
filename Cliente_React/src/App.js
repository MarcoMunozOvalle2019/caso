import React, { Component } from 'react';
import Indicadores from './componentes/biceIndicadores';
import Graficas from './componentes/biceGraficas';
import BiceMain from './componentes/biceMain';
import Valores from './componentes/biceValores';

import {Route} from 'react-router-dom';

class App extends Component {

  constructor(props){
      super(props);
      this.state = { 
      };
   }
   
   render() {
    const texto = 'Bice Corp';
    return (
      <div className="App">
         <h1>{texto}</h1>
         <Route exact path='/' component={BiceMain }/>
         <Route exact path='/valores/:id' component={ (entrega)=><Valores valor1="2" valor2={entrega}/> }/>
         <Route exact path='/indicadores/:id' component={ (entrega)=><Indicadores valor1="3" valor2={entrega}/> }/>
         <Route exact path='/graficas/:id' component={ (entrega)=><Graficas valor1="1" valor2={entrega}/> }/>
      </div>
    )
  }
}

export default App;
