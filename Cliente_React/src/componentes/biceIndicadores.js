
import React,{Component } from 'react';
import Client from '../consulta';
import '../../src/App.css'
var _ = require('lodash');


class BiceIndicadores extends Component{
    constructor(props){
       super(props);
        this.state={
            data:'',
        }
        this.handleInputChange= this.handleInputChange.bind(this);
    };  
    
    coneccion = (exito) => {
        if (exito === undefined ) alert(' data no recibida')
    };

    handleInputChange(e) {
        e.preventDefault();
        const {value} = e.target;
        const json=' {"json": { "pide":"' +value+ '", "tipo":"0" } } '

        let exito
        setTimeout(() =>(
            this.coneccion(exito)
        ),2000);

        Client.search(json, respuesta => {
            exito = respuesta
            this.setState({
                data: respuesta
              });
        });      

      }

    render(){
        let parsea
        const data = this.state.data;
        if(data) parsea = JSON.parse(data)
        const myobj = _.map( parsea, ((item)=>{
            return item;
         }))

        let thisOne = {}
        if (myobj.length>0) thisOne = myobj[0]

        return(

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
                        <div className="col-md-6">
                          <div className="card">
                            <div className="card-body">
                                    <select
                                        name="priority"
                                        className="form-control"
                                        value={this.state.priority}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>SELECCIONE AQUI PARA DESPLEGAR VALORES</option>
                                        <option>cobre</option>
                                        <option>dolar</option>
                                        <option>euro</option>
                                        <option>ipc</option>
                                        <option>ivp</option>
                                        <option>oro</option>
                                        <option>plata</option>
                                        <option>uf</option>
                                        <option>utm</option>
                                        <option>yen</option>      
                                    </select>
                                    <p className="card-text"> </p>

                                    <div className="card" >
                                        <h5 className="card-title">nombre</h5>
                                        <button className="btn btn-primary">{thisOne.name}</button>
                                        <h5 className="card-title">unidad</h5>
                                        <button className="btn btn-primary">{thisOne.unit}</button>
                                        <h5 className="card-title">data</h5>
                                        <button className="btn btn-primary">{thisOne.date}</button>
                                        <h5 className="card-title">valor</h5>
                                        <button className="btn btn-primary">{thisOne.value}</button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <img src={require('../assets/2.gif')} alt="loading..." width="360" height="360" />
                    </div>

                <div className="card text-white bg-primary mb-12" >
                    <form action="/" method="get" >
                        <button className="btn btn-primary"type="submit">Volver</button>
                    </form>                
                </div>         
            </div>   
    
          );
    }

}
export default BiceIndicadores;