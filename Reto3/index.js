const fs = require("fs");
const readline = require('readline');
// const rl = require('linebyline');
class Persona{

    constructor(name = "", surname = "", age = null){

        this.name = name;
        this.surname = surname;
        this.age =age;

    }
}

let p1 = new Persona();
let rl = readline.createInterface(process.stdin,process.stdout);

rl.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);

    rl.question('Who are you?', surName => {
        console.log(`Hey there ${surName}!`);

        rl.question('Who are you?', age => {
            console.log(`Hey there ${age}!`);
            let p2 = new Persona(name,surName,age);
            console.log(p2);
            
            fs.writeFile("persona.json",JSON.stringify(p2),function(err,data){
                fs.readFile("persona.json",function(err,data){
                    
                    console.log(JSON.parse(data))
                })
}
)
            rl.close();
          });
      });
  });


