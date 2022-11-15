const { resolve } = require('path');
const readline = require('readline');
// let {writeAndRead} = require("./writeAndReadObject");

// let rl = readline.createInterface(process.stdin,process.stdout);

// function readConsole(writeAndRead){
//     rl.question('Nombre?', name => {
//         console.log(`Nombre:  ${name}!`);
    
//         rl.question('Apellido?', surName => {
//             console.log(`Apellido:  ${surName}!`);
    
//             rl.question('Edad?', age => {
//                 console.log(`Edad: ${age}!`);
//                 let obj = {nombre : name,
//                             apellidos : surName,
//                             edad : age}

//                 writeAndRead("prueba.json",obj);
//                 rl.close();
//               });
//           });
//       });
// }

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

// function readConsole(){
//     let obj = {}
//     pregunta("¿Cual es tu nombre? ")
//     .then(nombre =>{
//         console.log("Nombre: " + nombre);
//         obj.name = nombre;
//         return pregunta("¿Cual es tu apellido? ")
//     })
//     .then(apellido =>{
//         console.log("Apellido: " + apellido);
//         obj.surname = apellido;
//         return pregunta("¿Cuantos años tienes? ")
//     })
//     .then(edad=>{
//         console.log("Edad: " + edad);
//         obj.age = edad;
//         resolve(obj);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })
// }

async function readConsole(){
    try {

        let nombre = await pregunta("Cual es tu nombre? ");
        let apellido = await pregunta("Cual es tu apellido? ");
        let edad = await pregunta("Cual es tu edad? ");
        let datos = {name : nombre,
                    surname: apellido,
                    age: edad};
        console.log(datos);
        resolve(datos);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {readConsole}