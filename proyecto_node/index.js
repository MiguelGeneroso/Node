let {writeAndRead} = require("./writeAndReadObject");
let {readConsole} = require("./readConsole");

// readConsole(writeAndRead);

async function ruta(){
    try {
        const data = await readConsole();//READCONSOLE VA A LLAMAR A LA FUNCION RUTA RETORNANDO UN OBJ Y PASANDOSELO A RUTA POR PARAMETRO
        console.log("ESTOS SON LOS DATOS: " + JSON.stringify(data));
        await writeAndRead("await.json",JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
    
}
ruta();

// readConsole()
// .then(obj =>{
//     console.log(obj);
//     writeAndRead("promesa.json",obj)
// })
// .catch((error)=>{
//     console.log(error);
// })




