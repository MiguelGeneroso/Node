const fs = require("fs/promises");
// function writeAndRead(path, obj){
//     fs.writeFile(path,JSON.stringify(obj),function(err,data){
//         fs.readFile(path,function(err,data){
//             console.log(JSON.parse(data));
//         })
// })
// }

// function writeAndRead(path, obj){

//     fs.writeFile(path,JSON.stringify(obj))
//     .then( () =>{
//         return fs.readFile(path);
//     })
//     .then(datos =>{
//         console.log(JSON.parse(datos));
//     })
//     .catch(error =>{
//         console.log(error);
//     })
// }

async function writeAndRead(path, obj){
    try {
        await fs.writeFile(path,JSON.stringify(obj));
        let data = await fs.readFile(path);
        console.log(JSON.parse(data));
    } catch (error) {
        console.log(error);
    }
}

module.exports ={writeAndRead};