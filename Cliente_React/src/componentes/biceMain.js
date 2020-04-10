import React,{Component} from 'react';
import '../../src/App.css'

class BiceMain extends Component {
    constructor(props) {
      super(props);
      this.state = {
            name:'',
            };
    }
  
    render() {
      return (

        <div className="card text-center border-info">

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="/">menu1</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">menu2</a>
                        </li>
                    </ul>
            </nav>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Indicadores</h5>
                        <p className="card-text">Indicadores  busyness</p>
                        <form action="/indicadores/1" method="get" >
                            <button className="btn btn-primary"type="submit">Ir a indicadores</button>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Graficas</h5>
                        <p className="card-text">Graficas de indicador Dolar</p>
                        <form action="/graficas/1" method="get" >
                            <button className="btn btn-primary"type="submit">Ir a graficas</button>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Valores</h5>
                        <p className="card-text">Mostrar Valores del dia</p>
                        <form action="/valores/1" method="get" >
                            <button className="btn btn-primary"type="submit">Ir a valores</button>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Bajo Construccion1</h5>
                        <p className="card-text">En Construccion1</p>
                        <form action="/pagina5/1" method="get" >
                            <button className="btn btn-primary"type="submit">Ir a construccion</button>
                        </form>
                    </div>
                    </div>
                </div>

            </div>


            <div className="card text-white bg-primary mb-3" >
            <div className="card-body">
                <button className="btn btn-primary"type="submit">Bienvenidos</button>
            </div>
            </div>
            
        </div>   

      );
    }
  }
export default BiceMain;