let professional = null;
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
        respuesta = professional;
    }else{
        respuesta = {error : true, code : 200, message : "The professional does not exist"}
    }

    res.send(respuesta);
}

function postProfessional(req,res){
    let respuesta;
    console.log(req.body);

    if(professional === null){

        professional = {nombre: req.body.nombre,
                        edad: req.body.edad,
                        peso: req.body.peso,
                        altura: req.body.altura,
                        isRetired: req.body.isRetired,
                        nacionalidad: req.body.nacionalidad,
                        numeroOscars: req.body.numeroOscars,
                        profesion: req.body.profesion};

        respuesta = {error : false, code : 200, message : "Professional created"}
    }else{
        respuesta = {error : true, code : 200, message : "Professional already exist"}
    }

    res.send(respuesta);
}

function putProfessional(req,res){
    let respuesta;
    if(professional != null){
        professional.nombre = req.body.nombre;
        professional.edad = req.body.edad;
        professional.peso = req.body.peso;
        professional.altura = req.body.altura;
        professional.isRetired = req.body.isRetired;
        professional.nacionalidad = req.body.nacionalidad;
        professional.numeroOscars = req.body.numeroOscars;
        professional.profesion = req.body.profesion;
        respuesta = {error : false, code : 200, message : "El professional no existe", resultado : professional};
        
    }else{
        respuesta = {error : true, code : 200, message : "El professional no existe", resultado : professional};
    }
    res.send(respuesta);
}

function delProfessional(req,res){
    let respuesta;
    if(professional != null){
        professional = null;
        respuesta = {error : false, code : 200, message : "Professional deleted", resultado : professional};
        
    }else{
        respuesta = {error : true, code : 200, message : "El professional no existe", resultado : professional};
    }
    res.send(respuesta);
}

module.exports = {getProfesional,getStart,putProfessional,postProfessional,delProfessional}