const { getSensors, addSensorval } = require("./controllers/Sensor");

const router = require("express").Router();

router.get("/", getSensors);
router.post("/sensors", addSensorval)

module.exports = router;
