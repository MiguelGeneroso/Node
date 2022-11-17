const express = require("express");
const cors = require("cors");
const profesionalRouters = require("./routers/profesional.routers");
const profesionalesRouters = require("./routers/profesionales.routers");
const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.urlencoded({ extended : false}));
app.use(express.json());
app.use(profesionalRouters);
app.use(profesionalesRouters);
app.use(function (req,res,next){
    res.status(404).json({error : true, code : 404, message : "Endpoint doesnt found"});
});
app.use(errorHandling);

module.exports = app;