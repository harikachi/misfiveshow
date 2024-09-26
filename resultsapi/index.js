// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Stations = require('./models/stations');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static('public'));

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //allowedHeaders: 'Content-Type, Authorization',
  };

  app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// API endpoint to search order items
app.post('/api/findStations', async (req, res) => {
    try {
        const { region, district, suburb, service_type, station_type, fuel_type} = req.body;
        console.log(req.body);
        // Create query conditions based on request parameters
        let query = {};

        if (region) {
            query.region = { $regex: region, $options: 'i' };
        }
        if (district) {
            query.district = { $regex: district, $options: 'i' };
        }
        if (suburb) {
            query.suburb = { $regex: suburb, $options: 'i' };
        }
        if (service_type) {
            query.service_type = { $regex: service_type, $options: 'i' };
        }
        if (station_type) {
            query.station_type = { $regex: station_type, $options: 'i' };
        }
        if (fuel_type) {
            query.fuel_type = { $regex: fuel_type, $options: 'i' };
        }
        const stations = await Stations.find(query);
        res.json(stations);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
