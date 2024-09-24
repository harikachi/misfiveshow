// models/OrderItem.js
const mongoose = require('mongoose');

const stationsSchema = new mongoose.Schema({
  region: String,
  district: String,
  suburb: String,
  service_type: String,
  station_type: String,
  fuel_type: String
});

const Stations = mongoose.model('Stations', stationsSchema);

module.exports = Stations;
