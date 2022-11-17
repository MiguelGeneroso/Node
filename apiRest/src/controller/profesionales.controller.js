let {Professional} = require("../models/profesional");
let arrProfessionales = [];

function getStart(req, res){

    let respuesta = {error : true, code : 200, message : "start point"};
    res.send(respuesta);

}

function getProfesionales(req,res){

    let position = req.query.position;
    let respuesta;
    // if(professional != null){
    //     position = req.query.position;
    //     console.log("entrando al if");
    //     respuesta = [arrProfessionales[position]];
    // }else{
    //     respuesta = {error : true, code : 200, message : "The professional does not exist"}
    // }

    if (position != null && position != ""){

        respuesta = [arrProfessionales[position]];
    }else{
        respuesta = arrProfessionales;
    }

    res.send(respuesta);
}

function postProfessionales(req,res){
    let respuesta;

    let newProfessional = new Professional(req.body.nombre,req.body.edad,req.body.peso,req.body.altura,req.body.isRetired,
                                        req.body.nacionalidad,req.body.oscarNumbers,req.body.profesion);

    arrProfessionales.push(newProfessional);

    respuesta = {error : false, code : 200, message : "Professional created", resultado : newProfessional};

    res.send(respuesta);
}

function putProfessionales(req,res){
    let respuesta;
    let position = req.body.position;
    if (position != null && position != ""){

        if(arrProfessionales != null){

            // FILTRAR DATOS VACIOS
            arrProfessionales[position].nombre = req.body.nombre;
            arrProfessionales[position].edad = req.body.edad;
            arrProfessionales[position].peso = req.body.peso;
            arrProfessionales[position].altura = req.body.altura;
            arrProfessionales[position].isRetired = req.body.isRetired;
            arrProfessionales[position].nacionalidad = req.body.nacionalidad;
            arrProfessionales[position].oscarNumbers = req.body.oscarNumbers;
            arrProfessionales[position].profesion = req.body.profesion;
            respuesta = {error : false, code : 200, message : "se modifica el profesional", resultado : arrProfessionales};
        }else{
            respuesta = {error : true, code : 200, message : "El professional no existe", resultado : professional};
        }

    }else{
        respuesta = {error : true, code : 200, message : "No se ha introducio ninguna posicion"};
    }
    
    res.send(respuesta);
}

function delProfessionales(req,res){

    let respuesta;
    let position = req.body.position;

    if(arrProfessionales != null){
        
        arrProfessionales.splice(position,1);
        respuesta = {error : false, code : 200, message : "Professional deleted", resultado : arrProfessionales};
        
    }else{
        respuesta = {error : true, code : 200, message : "El professionales no existe", resultado : arrProfessionales};
    }
    res.send(respuesta);
}

module.exports = {getProfesionales,getStart,putProfessionales,postProfessionales,delProfessionales}