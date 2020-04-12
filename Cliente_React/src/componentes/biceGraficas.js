
import React,{Component} from 'react';
import Client from '../consulta';
import {Line} from 'react-chartjs-2';
var _ = require('lodash');

class BiceGraficas extends Component{
    constructor(props){
        super(props);
         this.state={
             name:'',
             data:{},
             grafica:{},
             info:[],
             valores:{},
             combo:[]
         }
         this.handleInputChange= this.handleInputChange.bind(this);
     };  

     getData(){
        // Obtiene data de api
        Client.search( respuesta => {

             const thisOne = respuesta.apis[1].example.response

             // prepara items combo
             const arreglo=[]
             arreglo.push({name:'ELEGIR AQUI PARA GRAFICAR'})
             arreglo.push({name:'nada1'})
             arreglo.push({name:'nada2'})
             arreglo.push({name:thisOne.key})

             this.setState({
                data: thisOne,
                combo:arreglo,
                info: respuesta.apis
              });

             // prepara grafica inicial
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
              this.setState({grafica: state});
       });      
      }
    

    componentDidMount(){
       // mount data
       this.getData();
    }     


    handleInputChange(e) {
         e.preventDefault();
         const {value} = e.target;

         let counter=1
         let arreglo1=[]
         let arreglo2=[]

         // si seleccion combo corresponde carga arreglos con data
         if (this.state.data.key===value){
                _.forEach(this.state.data.values, (n, key)=> {
                    arreglo1.push(n)
                    arreglo2.push(counter)
                    counter++
                });        
                this.setState({
                    grafica: state,
                    valores:this.state.data
                   });
            }

         // si seleccion combo otro opcion reset arreglos con data
         if (value==='nada1'||value==='nada2')
            {
                for(let i=0;i<301;i++){
                    arreglo1.push(i);arreglo1.push(2);
                }
                this.setState({
                    grafica: state,
                    valores:{"key":"","name":"","unit":""}
                   });       
            }

         // prepara grafica   
         let state = {
            labels: arreglo2,
            datasets: [
            {
                label: 'BICE ESTADOS',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(175,192,192,1)',
                borderColor: 'rgba(255,2,255,1)',
                borderWidth: 2,
                data: arreglo1
            }
            ]
         }
         this.setState({grafica: state});
       }

       
    render(){

        // poblar combo
        let optionItems = this.state.combo.map((combo) =>
                <option key={combo.name}>{combo.name}</option>
         );        

         return(
             
             <div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="card-body">
                            <Line
                                data={this.state.grafica}
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
                                <select name="priority"
                                            className="form-control"
                                            value={this.state.priority}
                                            onChange={this.handleInputChange}>
                                            {optionItems}
                                </select>                

                                <p className="card-text"> </p>

                                <div className="card" >
                                   <div className="card">
                                    <button className="btn btn-primary">{this.state.valores.key}</button>
                                    </div>
                                    <div className="card">
                                    <button className="btn btn-primary">{this.state.valores.name}</button>
                                    </div>
                                    <div className="card">
                                    <button className="btn btn-primary">{this.state.valores.unit}</button>
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