let {writeAndRead} = require("./writeAndReadObject");
let {readConsole} = require("./readConsole");

// readConsole(writeAndRead);

function ruta(obj){

    writeAndRead("await.json",obj);
}

readConsole(ruta);