const express = require("express");
const app = express();

// app.get("/",function(req,res){
//     console.log("Peticion recibida por el cliente");
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers["user-agent"]);
//     res.send("Hello from server");
// });
app.set("port", process.env.PORT || 3000);//PARA DEFINIR EL PUERTO
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.get("/",(req,res,next) =>{

    console.log("Peticion recibida por el cliente");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.status(200).json({ok : true, message : "Recibido"});


    next();
})

app.get("/bye",(req,res,next) => {
    console.log("Peticion de salida recibida por el cliente");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.status(200).json({ ok: true, message : "Adios!" });

    next();
})

app.listen(4000);