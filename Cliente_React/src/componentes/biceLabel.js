
import React,{Component} from 'react';

class TodoLabel extends Component{
    constructor(props){
       super(props);
       const dato=this.props
        this.state={
            prioridad1: dato.valor,
            prioridad2: dato.nombre
        }

    };  

    render(){
         return(
         <div>
           <div className="card-body">
                <div className="col-sm-3">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">valores</h5>
                        <p className="card-text">En Construccion</p>
                        <h4>{this.state.prioridad1} {this.state.prioridad2}</h4>
                    </div>
                    </div>
                </div>           
            </div>
          </div>            
      )
    }

}
export default TodoLabel;