let datosJson;

fetch('info.json')
.then(response => response.json())
.then((salida) => {
    datosJson = salida;
    let nombreBanco = document.getElementById("nombre-banco");
    nombreBanco.textContent = datosJson.banco;

    let sucursal = document.getElementById("sucursal-banco");
    sucursal.textContent = datosJson.sucursal;

    let nombreCliente = document.getElementById("nombre-cliente");
    nombreCliente.textContent = datosJson.titular;

    let numeroCuenta = document.getElementById("numero-cuenta");
    numeroCuenta.textContent = datosJson.nro_cuenta;

    let valorUsd = document.getElementById("monto-usd");
    valorUsd.textContent = datosJson.saldo[0].monto;
    let valorEur = document.getElementById("monto-eur");
    valorEur.textContent = datosJson.saldo[1].monto;

    let codigoBanco = document.getElementById("codigo-banco");
    codigoBanco.textContent = datosJson.nro_banco;

    let fechaApertura = document.getElementById("fecha-apertura");
    fechaApertura.textContent = datosJson.abierto;

    let euros = document.getElementById("euro");
    euros.textContent = datosJson.saldo[1].moneda;

    let usd = document.getElementById("usd");
    usd.textContent = datosJson.saldo[0].moneda;

})

.catch(function(error){
    alert(error);
})