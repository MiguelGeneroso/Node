const { Router } = require("express");
const router = Router();
const userCtrl = require("../controller/profesional.controller");

router.get("/", userCtrl.getStart);

router.get("/professional", userCtrl.getProfesional);

router.post("/professional", userCtrl.postProfessional);

router.put("/professional", userCtrl.putProfessional);

router.delete("/professional", userCtrl.delProfessional);

module.exports = router;