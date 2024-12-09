const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const route = require('./routes')
app.use(express.json());

app.use('/api',route)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});