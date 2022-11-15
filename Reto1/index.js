class Professional{
    constructor(nombre,edad,peso,altura,isRetired,nacionalidad,oscarNumbers,profession){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.isRetired = isRetired;
        this.nacionalidad = nacionalidad;
        this.oscarNumbers = oscarNumbers;
        this.profession = profession;
    }
}

function postProfessional(){
    let newProfessional = new Professional(document.getElementById("nombre").value,
                                        document.getElementById("edad").value,
                                        document.getElementById("peso").value,
                                        document.getElementById("altura").value,
                                        document.getElementById("isRetired").value,
                                        document.getElementById("nacionalidad").value,
                                        document.getElementById("oscarNumbers").value,
                                        document.getElementById("profesion").value);
    console.log(JSON.stringify(newProfessional));

    let xhttp = new XMLHttpRequest();

    xhttp.open("POST","http://localhost:4000/professional",true);
    xhttp.setRequestHeader("Content-type","aplication/json");
    xhttp.send(JSON.stringify(newProfessional));
}