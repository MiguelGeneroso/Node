const { rejects } = require("assert");
const fs = require("fs/promises");
const { stdout } = require("process");
const readline = require("readline");
// const rl = require('linebyline');
class Persona{

    constructor(name = "", surname = "", age = null){

        this.name = name;
        this.surname = surname;
        this.age =age;

    }
}

let p1 = new Persona();
// let rl = readline.createInterface(process.stdin,process.stdout);

// rl.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);

//     rl.question('Who are you?', surName => {
//         console.log(`Hey there ${surName}!`);

//         rl.question('Who are you?', age => {
//             console.log(`Hey there ${age}!`);
//             let p2 = new Persona(name,surName,age);
//             console.log(p2);
            
//             fs.writeFile("persona.json",JSON.stringify(p2),function(err,data){
//                 fs.readFile("persona.json",function(err,data){
                    
//                     console.log(JSON.parse(data))
//                 })
//             })
//             rl.close();
//           });
//       });
//   });


function pregunta(pregunta){
    const question = new Promise((resolve,reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta,(respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    })
    return question;
}

datos = new Persona();

// pregunta("¿Cual es tu nombre? ")
// .then(nombre =>{
//     console.log("Nombre: " + nombre);
//     datos.name = nombre;
//     return pregunta("¿Cual es tu apellido? ")
// })
// .then(apellido =>{
//     console.log("Apellido: " + apellido);
//     datos.surname = apellido;
//     return pregunta("¿Cuantos años tienes? ")
// })
// .then(edad=>{
//     console.log("Edad: " + edad);
//     datos.age = edad;
//     console.log(datos);
//     // return fs.writeFile("promesaPersona.json")
// })
// .then(() => {
//     return fs.writeFile("promesaPersona.json",JSON.stringify(datos));
// })
// .then(() => {
//     console.log("se crea fichero");
//     return fs.readFile("promesaPersona.json")
// })
// .then(dataRead => {
//     console.log(JSON.parse(dataRead));
// })
// .catch(err => {
//     console.log(err);
// })

async function asyncAwait (){
    try {

        let nombre = await pregunta("Cual es tu nombre? ");
        let apellido = await pregunta("Cual es tu apellido? ");
        let edad = await pregunta("Cual es tu edad? ");
        let datos = new Persona(nombre,apellido,edad);
        await fs.writeFile("awaitpersona.json",JSON.stringify(datos));
        let data = await fs.readFile("awaitpersona.json")
        console.log(JSON.parse(data));
        
    } catch (error) {
        console.log(error);
    }
}
asyncAwait();