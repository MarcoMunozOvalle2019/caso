
import React,{Component} from 'react';
import Client from '../consulta';
import '../../src/App.css'

class BiceIndicadores extends Component{
    constructor(props){
       super(props);
        this.state={
            name:'',
        }
        this.handleInputChange= this.handleInputChange.bind(this);
    };  
    handleInputChange(e) {
        e.preventDefault();
        const {value} = e.target;
        const esto=' {"json": { "pide":"' +value+ '", "tipo":"0" } } '
        Client.search(esto, respuesta => {
            this.setState({
                name: respuesta
              });
        });      
      }
    render(){
        let muestra= this.state.name;
        let myobj = eval( muestra );
        let thisOne = {key:'', name:'', unit:'', date:'', value:''}
        if (myobj) thisOne = myobj[0]
  
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
    
                        <div className="col-sm-8">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">INDICADORES DEL DIA</h5>
    
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

                                    <div className="card-body" className="col-sm-2">
                                            <button className="btn btn-primary">{thisOne.name}</button>
                                            <span className="badge badge-pill badge-dander ml-12">Unidad</span>
                                            <button className="btn btn-primary">{thisOne.unit}</button>
                                            <span className="badge badge-pill badge-dander ml-12">fecha</span>
                                            <button className="btn btn-primary">{thisOne.date}</button>
                                            <span className="badge badge-pill badge-dander ml-12">valor</span>
                                            <button className="btn btn-primary">{thisOne.value}</button>
                                    </div>
                            </div>
                          </div>
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