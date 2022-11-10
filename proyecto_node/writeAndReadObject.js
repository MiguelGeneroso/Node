const fs = require("fs");
function writeAndRead(path, obj){
    fs.writeFile(path,JSON.stringify(obj),function(err,data){
        fs.readFile(path,function(err,data){
            console.log(JSON.parse(data));
        })
})
}

module.exports ={writeAndRead};