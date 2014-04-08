var request = require('request');

var PagoFacil = function() {};

PagoFacil.prototype.API_BASE = 'https://www.pagofacil.net/st/public/Wsrtransaccion/index/format/json';


PagoFacil.prototype.checkout = function(params, callback) {
    params['idServicio'] = 3;
    params['noMail'] = true;
    params['divisa'] = 'USD';
    data = {
        "jsonrpc": "2.0",
        "method": "transaccion",
        "data": params,
        "id": params["id"]
    };
    request.post(this.API_BASE, {
        form: data,
        json: true
    }, function(error, response, body) {
        if (error != null) return error;
        var error = null;
        if (body.WebServices_Transacciones.transaccion.hasOwnProperty("error")) {
            error = body.WebServices_Transacciones.transaccion.error;
            delete body.WebServices_Transacciones.transaccion["error"];
        }
        response = body.WebServices_Transacciones.transaccion;
        callback(error, response);
    });
};

module.exports = new PagoFacil();