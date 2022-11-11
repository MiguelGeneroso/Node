let {writeAndRead} = require("./writeAndReadObject");
let {readConsole} = require("./readConsole");

function ruta(obj){

    writeAndRead("path.json",obj);

}
readConsole(ruta);