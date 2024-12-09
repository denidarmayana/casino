const express = require('express');
const axios = require('axios');
const app = express();
const route = require('./routes')
app.use(express.json());



app.get('/',(req,res)=>{
    res.json({name:"Games Api",version:"1.0.0"})
})
app.use('/api', (req, res, next) => {
    console.log('API route accessed');
    next();
}, route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
