
import React,{Component} from 'react';
import Client from '../consulta';
import {Line} from 'react-chartjs-2';
var _ = require('lodash');


class BiceGraficas extends Component{
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
         const json=' {"json": { "pide":"' +value+ '", "tipo":"1" } } '
         Client.search(json, respuesta => {
             this.setState({
                 data: respuesta
               });
         });      
       }
 
    render(){

        let state = {
            labels: [],
            datasets: [
              {
                label: 'BICE ESTADOS',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(175,192,192,1)',
                borderColor: 'rgba(255,2,255,1)',
                borderWidth: 2,
                data: []
              }
            ]
          }
        state.datasets[0].data.push(4)
        let parsea
        let data = this.state.data;
        if(data) parsea = JSON.parse(data)
        const info = _.map( parsea, ((item)=>{
            return item;
         }))

        let counter=1
        let arreglo1=[]
        let arreglo2=[]
        _.forEach(info[3], (n, key)=> {
            arreglo1.push(n)
            arreglo2.push(counter)
            counter++
          });        

        state.datasets[0].data = arreglo1
        state.labels = arreglo1

         return(
             <div>

                        <div className="col-sm-6">
                          <div className="card">
                            <div className="card-body">
                            <Line
                                data={state}
                                options={{
                                    title:{
                                    display:true,
                                    text:'Grafica mensual',
                                    fontSize:40
                                    },
                                    legend:{
                                    display:true,
                                    position:'right'
                                    }
                                }}
                                />
                             </div>
                          </div>
                        </div>


                        <div className="col-sm-8">
                          <div className="card">
                            <div className="card-body">
                                <select
                                    name="priority"
                                    className="form-control"
                                    value={this.state.priority}
                                    onChange={this.handleInputChange}
                                >
                                    <option>SELECCIONE AQUI PARA DESPLEGAR GRAFICA</option>
                                    <option>cobre</option>
                                    <option>dolar</option>
                                </select>
                                
                                <p className="card-text"> </p>

                                <div className="card" >
                                  <h5 className="card-title">datos</h5>
                                    <div className="card">
                                    <button className="btn btn-primary">{info[0]}</button>
                                    </div>
                                    <div className="card">
                                    <button className="btn btn-primary">{info[1]}</button>
                                    </div>
                                    <div className="card">
                                    <button className="btn btn-primary">{info[2]}</button>
                                    </div>
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
        )
    }


}
export default BiceGraficas;