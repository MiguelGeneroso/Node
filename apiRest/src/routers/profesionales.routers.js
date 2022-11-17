const { Router } = require("express");
const router = Router();
const userCtrl = require("../controller/profesionales.controller");

router.get("/", userCtrl.getStart);

router.get("/profesionales", userCtrl.getProfesionales);

router.post("/profesionales", userCtrl.postProfessionales);

router.put("/profesionales", userCtrl.putProfessionales);

router.delete("/profesionales", userCtrl.delProfessionales);

module.exports = router;