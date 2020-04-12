
const ejecutarFacade = require('../../components/consultas/consultas.facade');


/*  ejecuta el bice controlador*/

class EjecutarController{
    static async executeTransfer(req){
        const output = await ejecutarFacade.executeTransfer(req)
        return output
    }
}

module.exports = EjecutarController;