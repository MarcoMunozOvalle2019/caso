import React,{Component} from 'react';
import TodoLabel from '../../src/componentes/biceLabel';

class BiceValores extends Component {
    constructor(props) {
      super(props);
      this.state = {
            };
    }
  
    render() {
      return (
        <div>
            <TodoLabel valor="UF=" nombre="1.3456"/>
            <TodoLabel valor="Pesos=" nombre="1.1456"/>
            <TodoLabel valor="Dolar=" nombre="1.2456"/>
              <div className="card text-white bg-primary mb-12" >
                <form action="/" method="get" >
                    <button className="btn btn-primary"type="submit">Volver</button>
                </form>                
              </div>         
            </div>
      );
    }
  }
export default BiceValores;