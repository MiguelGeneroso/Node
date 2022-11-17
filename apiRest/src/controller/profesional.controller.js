let {Professional} = require("../models/profesional")
let profesional = null;
// GET /profesional. Obtiene el profesional.
// ● POST /profesional. Crea un nuevo objeto profesional.
// ● PUT /profesional. Modifica los datos del profesional.
// ● DEL /profesional. Elimina al profesional.

function getStart(req, res){

    let respuesta = {error : true, code : 200, message : "start point"};
    res.send(respuesta);

}

function getProfesional(req,res){

    let respuesta;
    if(professional != null){
        respuesta = profesional;
    }else{
        respuesta = {error : true, code : 200, message : "The professional does not exist"}
    }

    res.send(respuesta);
}

function postProfessional(req,res){
    let respuesta;
    console.log(req.body);

    if(profesional === null){

        newProfessional = new Proffesional(req.body.nombre,
                        req.body.edad,
                        req.body.peso,
                        req.body.altura,
                        req.body.isRetired,
                        req.body.nacionalidad,
                        req.body.numeroOscars,
                        req.body.profesion);

        respuesta = {error : false, code : 200, message : "Professional created"}
    }else{
        respuesta = {error : true, code : 200, message : "Professional already exist"}
    }

    res.send(respuesta);
}

function putProfessional(req,res){
    let respuesta;
    if(profesional != null){
        profesional.nombre = req.body.nombre;
        profesional.edad = req.body.edad;
        profesional.peso = req.body.peso;
        profesional.altura = req.body.altura;
        profesional.isRetired = req.body.isRetired;
        profesional.nacionalidad = req.body.nacionalidad;
        profesional.numeroOscars = req.body.numeroOscars;
        profesional.profesion = req.body.profesion;
        
    }else{
        respuesta = {error : true, code : 200, message : "El professional no existe", resultado : professional};
    }
    res.send(respuesta);
}

function delProfessional(req,res){
    let respuesta;
    if(profesional != null){
        profesional = null;
        respuesta = {error : false, code : 200, message : "Professional deleted", resultado : professional};
        
    }else{
        respuesta = {error : true, code : 200, message : "El professional no existe", resultado : professional};
    }
    res.send(respuesta);
}

module.exports = {getProfesional,getStart,putProfessional,postProfessional,delProfessional}