const axios = require('axios');

/*  ejecuta el bice servicio api externa*/

class EjecutarService{

    static async executeTransfer(req){
        const salida = await axios.get('https://www.indecon.online/')
        .then(function (response) {
            const thisOne = response.data
            return thisOne
        })
        .catch(function (error) {
            return error.hostname
        })
        .finally(function () {
        });
        return salida
        
    }
}
module.exports = EjecutarService;