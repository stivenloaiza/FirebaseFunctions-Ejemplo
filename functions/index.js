const functions = require('firebase-functions');

//Funcion para obtener ip del cliente
 exports.getIPCliente = functions.https.onRequest((request, response) => {
    let ipCliente = request.ip; 
  response.send(ipCliente);
 });

 //Funcion para obtener el dia, mes año, hora, minutos y segundos del servidor de firebase
 exports.getServerDate = functions.https.onRequest((request, response) => {
    let fechaActual = new Date();

    let dia= fechaActual.getDate();
    dia=dia.toString().padStart(2, "0");

    let mes= fechaActual.getMonth()+1;
    mes=mes.toString().padStart(2, "0");

    let anio= fechaActual.getFullYear();

    let hora= fechaActual.getHours();
    hora=hora.toString().padStart(2, "0");

    let minutos= fechaActual.getMinutes();
    minutos=minutos.toString().padStart(2, "0");
    
    let segundos= fechaActual.getSeconds();
    segundos=segundos.toString().padStart(2, "0");

  response.send(dia+"-"+mes+"-"+anio+" "+hora+":"+minutos+":"+segundos);
 });
