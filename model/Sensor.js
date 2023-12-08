const mongoose = require("mongoose");

const SensorsSchema = new mongoose.Schema({
    pump_stat: {
        type: Number,
        required: true,
    },
    water_level: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    },
    rain_level: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    ph: {
        type: Number,
        required: true
    },
    nitrogen: {
        type: Number,
        required: true
    },
    phosphorus: {
        type: Number,
        required: true
    },
    potassium: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

});
module.exports = mongoose.model("Sensor", SensorsSchema);

