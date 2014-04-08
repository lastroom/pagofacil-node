Pago fácil node wrapper
=========

## Install

```
npm install pagofacil-node
```

## Usage

```js
var pagofacil = require('pagofacil');

pagofacil.checkout({
    "nombre": "Juan",
    "apellidos": "Lopez",
    "numeroTarjeta": "5579567890123456",
    "cvt": "123",
    "cp": "11560",
    "mesExpiracion": "10",
    "anyoExpiracion": "15",
    "monto": "100",
    "idSucursal": '',
    "idUsuario": '',
    "email": "comprador@correo.com",
    "telefono": "5550220910",
    "celular": "5550123456",
    "calleyNumero": "Anatole France 311",
    "colonia": "Polanco",
    "municipio": "Miguel Hidalgo",
    "estado": "Distrito Federal",
    "pais": "Mexico",
    "idPedido": "", // Must be unique, not required, but useful to link transaction with our data
    "id": "test3" //Must be unique, could be the same that idPedido
}, function(error, response) {
    console.log(error);
    console.log(response);
});
```