// let {Professional} = require("../");
// class Professional{
//     constructor(nombre,edad,peso,altura,isRetired,nacionalidad,oscarNumbers,profession){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.peso = peso;
//         this.altura = altura;
//         this.isRetired = isRetired;
//         this.nacionalidad = nacionalidad;
//         this.oscarNumbers = oscarNumbers;
//         this.profesion = profesion;
//     }
// }

function postProfessional(){
    let newProfessional = {nombre : document.getElementById("nombre").value,
                            edad : document.getElementById("edad").value,
                            peso : document.getElementById("peso").value,
                            altura : document.getElementById("altura").value,
                            isRetired : document.getElementById("isRetired").value,
                            nacionalidad : document.getElementById("nacionalidad").value,
                            oscarNumbers : document.getElementById("oscarNumbers").value,
                            profesion : document.getElementById("profesion").value};

    const url = "http://localhost:4000/profesionales";
    console.log(newProfessional);
    if (validar(newProfessional)){

        let param = {headers : {"Content-type" : "application/json; charset= UTF-8"},
        body : JSON.stringify(newProfessional),
        method : "POST"
        };
        fetch(url,param)
        .then(function(data){
            console.log("DATA: " + data);
            return data.json();
        })
        .then(function(result){
            if(result.error){
                showToast("ERROR: " + result.message, "bg-danger");
            }else{
                showToast("PROFESIONAL CREADO CORRECTAMENTE", "bg-success");
            }
        })
    }
    // console.log(newProfessional);
    // console.log(JSON.stringify(newProfessional));

    // let xhttp = new XMLHttpRequest();

    // xhttp.open("POST","http://localhost:4000/professional",true);
    // xhttp.setRequestHeader("Content-type","application/json");
    // xhttp.send(JSON.stringify(newProfessional));
}

function getProfessional(){

    let id = document.getElementById("id").value;
    let url;
    if (id == "" || id == null){
        console.log("HOLA");
        url = "http://localhost:4000/profesionales";
        
    }else{
        console.log("ADIOS");
        url = "http://localhost:4000/profesionales?position="+id;
    }

    let param = {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
        };

    fetch(url, param)
    .then(function(data){
        console.log("URL: " + url);
        console.log("PARAM: " + JSON.stringify(param));
        console.log("DATOOOOOOOOS" + JSON.stringify(data));
        return data.json(); 
    })
    .then(function(result){
        console.log("DATITOS: " + JSON.stringify(result));    
        if (!result.error)
        {
            
            if (result.length == 1){
                let nombre = result[0].nombre;
                let edad = result[0].edad;
                let peso = result[0].peso;
                let altura = result[0].altura;
                let isRetired = result[0].isRetired;
                let nacionalidad = result[0].nacionalidad;
                let oscarNumbers = result[0].oscarNumbers;
                let profesion = result[0].profesion;
                let str = '<div class="card" style="width: 18rem;"><p>Nombre: '+ nombre + '<br>Edad:' + edad + '<br>Peso:' + peso + '<br>Altura:' + altura + '<br>¿Esta retirado?:' + isRetired + '<br>Nacionalidad:' + nacionalidad +'<br>Numero de Oscars:' + oscarNumbers +'<br>Profesion:' + profesion +'</p></div>';
                $("#main3").empty();
                $("#main3").append(str);
            }else{
                $("#main3").empty();
                for(let i = 0; i < result.length; i++){

                    let nombre = result[i].nombre;
                    let edad = result[i].edad;
                    let peso = result[i].peso;
                    let altura = result[i].altura;
                    let isRetired = result[i].isRetired;
                    let nacionalidad = result[i].nacionalidad;
                    let oscarNumbers = result[i].oscarNumbers;
                    let profesion = result[i].profesion;
                    let str = '<div class="card border border-2 border-dark" style="width: 18rem;"><p>Nombre: '+ nombre + '<br>Edad:' + edad + '<br>Peso:' + peso + '<br>Altura:' + altura + '<br>¿Esta retirado?:' + isRetired + '<br>Nacionalidad:' + nacionalidad +'<br>Numero de Oscars:' + oscarNumbers +'<br>Profesion:' + profesion +'</p></div>';

                    
                    $("#main3").append(str);
                }
            }
            
            
            showToast("SE MUESTRAN LOS PROFESIONALES CORRECTAMENTE", "bg-success");
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger");

    })
    .catch(function(error)
    {
        console.log(error)
    })
}
function putProfessional(){

    let newProfessional = { position : document.getElementById("id").value,
                            nombre : document.getElementById("nombre").value,
                            edad : document.getElementById("edad").value,
                            peso : document.getElementById("peso").value,
                            altura : document.getElementById("altura").value,
                            isRetired : document.getElementById("isRetired").value,
                            nacionalidad : document.getElementById("nacionalidad").value,
                            oscarNumbers : document.getElementById("oscarNumbers").value,
                            profesion : document.getElementById("profesion").value};

    const url = "http://localhost:4000/profesionales";
    console.log(newProfessional);
    if (validar(newProfessional)){

        let param = {headers : {"Content-type" : "application/json; charset= UTF-8"},
        body : JSON.stringify(newProfessional),
        method : "PUT"
        };
        fetch(url,param)
        .then(function(data){
            return data.json();
        })
        .then(function(result){
            if(result.error){
                showToast("ERROR: " + result.message, "bg-danger");
            }else{
                showToast("PROFESIONAL MODIFICADO CORRECTAMENTE", "bg-success");
            }
        })
    }
}

function deleteProfesionales(){
    let newProfessional = { position : document.getElementById("id").value};

    const url = "http://localhost:4000/profesionales";
    console.log(newProfessional);
    if (validar(newProfessional)){

        let param = {headers : {"Content-type" : "application/json; charset= UTF-8"},
        body : JSON.stringify(newProfessional),
        method : "DELETE"
        };
        fetch(url,param)
        .then(function(data){
            return data.json();
        })
        .then(function(result){
            if(result.error){
                showToast("ERROR: " + result.message, "bg-danger");
            }else{
                showToast("PROFESIONAL ELIMINADO CORRECTAMENTE", "bg-success");
            }
        })
    }
}

function validar(profesional)
{
    resultado = false
    if (profesional.nombre == "" || profesional.nombre == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (profesional.edad == "" || profesional.edad == "null")
    {
        showToast("AVISO: Campo edad no informado", "bg-warning")
    }
    else if (profesional.peso == "" || profesional.peso == "null")
    {
        showToast("AVISO: Campo peso no informado", "bg-warning")
    }
    else if (profesional.altura == "" || profesional.altura == "null")
    {
        showToast("AVISO: Campo altura no informado", "bg-warning")
    }
    else if (profesional.isRetired == "" || profesional.isRetired == "null")
    {
        showToast("AVISO: Campo ¿esta retirado? no informado", "bg-warning")
    }
    else if (profesional.nacionalidad == "" || profesional.nacionalidad == "null")
    {
        showToast("AVISO: Campo nacionalidad no informado", "bg-warning")
    }
    else if (profesional.oscarNumbers == "" || profesional.oscarNumbers == "null")
    {
        showToast("AVISO: Campo numero de Oscar no informado", "bg-warning")
    }
    else if (profesional.profession == "" || profesional.profession == "null")
    {
        showToast("AVISO: Campo profesion no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}
