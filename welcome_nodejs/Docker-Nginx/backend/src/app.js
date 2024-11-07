// backend/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Привіт! Це API сервера backend.' });
});

app.listen(PORT, () => {
    console.log(`Backend server запущено на порту ${PORT}`);
});
