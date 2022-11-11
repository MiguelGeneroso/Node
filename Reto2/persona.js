const fs = require("fs/promises");
class Persona{

    constructor(name, surname, age){

        this.name = name;
        this.surname = surname;
        this.age =age;

    }
}

let p1 = new Persona("Miguel","Generoso",26);

//--------------------CALLBACK--------------------
// fs.writeFile("persona.json",JSON.stringify(p1),function(err,data){
//                                                 fs.readFile("persona.json",function(err,data){
//                                                                             console.log(JSON.parse(data))
//                                                 })
// })

//--------------------PROMESAS--------------------
// fs.writeFile("promesaPersona.json",JSON.stringify(p1))
// .then( () =>{
//     return fs.readFile("promesaPersona.json");
// })
// .then(datos =>{
//     console.log(JSON.parse(datos));
// })
// .catch(error =>{
//     console.log(error);
// })
//--------------------ASYNC/AWAIT--------------------

async function asyncAwait (){

    try {

        await fs.writeFile("awaitPersona.json",JSON.stringify(p1));
        const datos = await fs.readFile("awaitPersona.json");
        console.log(JSON.parse(datos));

    } catch (error) {
        
        console.log(error);

    }
}
asyncAwait();