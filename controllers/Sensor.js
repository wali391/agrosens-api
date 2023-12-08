
const Sensor = require("../model/Sensor")
const getSensors = (req, res) => {
    Sensor.find().then((data) =>
        res.json(data));

};
const addSensorval = (req, res) => {

    const sensor = new Sensor({
        pump_stat: req.body.pump_stat,
        water_level: req.body.water_level,
        humidity: req.body.humidity,
        rain_level: req.body.rain_level,
        temperature: req.body.temperature,
        ph: req.body.ph,
        nitrogen: req.body.nitrogen,
        phosphorus: req.body.phosphorus,
        potassium: req.body.potassium,
    });
    sensor.save().then(() =>
        res.status(200).json({
            status: 200,
            success: true,
            data: sensor
        })
    ).then((err) => console.log());

};
const deleteSense = (req, res) => {

}

module.exports = {
    getSensors,
    addSensorval
};