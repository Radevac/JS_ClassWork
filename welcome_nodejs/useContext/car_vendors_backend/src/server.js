const express = require('express');
const cors = require('cors');
const vendorRoutes = require('./routes/vendorRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/cars', vendorRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/carVendors', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log('DB connection error: ', err));
