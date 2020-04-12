const ejecutarService = require('../../components/consultas/consultas.service');

/*  ejecuta el bice Facade, logica de Negocio aqui*/

class EjecutarFacade{
    static async executeTransfer(req){
    let data
    try {
        const output = await ejecutarService.executeTransfer(req)
        data = output
    }catch (err) {
        data = 'error:'+err
        return data
    }
    return data
    }
}

module.exports = EjecutarFacade;