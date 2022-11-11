let {writeAndRead} = require("./writeAndReadObject");
let {readConsole} = require("./readConsole");

// readConsole(writeAndRead);

function ruta(obj){

    writeAndRead("await.json",obj);
}

readConsole(ruta);//READCONSOLE VA A LLAMAR A LA FUNCION RUTA RETORNANDO UN OBJ Y PASANDOSELO A RUTA POR PARAMETRO