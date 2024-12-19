const Car = require('../models/carModel');

const getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getCars };
