const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Jumia Scrapper API.');
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})