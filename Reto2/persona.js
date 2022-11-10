const fs = require("fs");
class Persona{

    constructor(name, surname, age){

        this.name = name;
        this.surname = surname;
        this.age =age;

    }
}
function printAll(){
    
    console.log("Name: " + this.name + "\nSurname: " + this.surname + "\nAge: " + this.age);
}

let p1 = new Persona("Miguel","Generoso",26);

fs.writeFile("persona.json",JSON.stringify(p1),function(err,data){
                                                                fs.readFile("persona.json",function(err,data){
                                                                    console.log(JSON.parse(data))
                                                                })
})