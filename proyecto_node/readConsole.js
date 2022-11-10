const readline = require('readline');
// let {writeAndRead} = require("./writeAndReadObject");

let rl = readline.createInterface(process.stdin,process.stdout);

function readConsole(writeAndRead){
    rl.question('Nombre?', name => {
        console.log(`Nombre:  ${name}!`);
    
        rl.question('Apellido?', surName => {
            console.log(`Apellido:  ${surName}!`);
    
            rl.question('Edad?', age => {
                console.log(`Edad: ${age}!`);
                let obj = {nombre : name,
                            apellidos : surName,
                            edad : age}

                writeAndRead("prueba.json",obj);
                rl.close();
              });
          });
      });
}

module.exports = {readConsole}