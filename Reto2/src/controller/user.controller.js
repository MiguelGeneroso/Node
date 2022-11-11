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

function postProfessional(){

}

function putProfessional(){

}

function delProfessional(){

}
module.exports = {}