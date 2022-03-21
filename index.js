const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.end("Point on "+port);
});

app.listen(port, ()=>{
    console.log(`app listening at port ${port}`)
});

//logger
var logger = require('./logger'); 
app.get('/log', function(req, res) {
  
    logger.log(req.query.nama, req.query.api, req.query.request, req.query.response, req.query.header);
    res.send({
        status: 200,
        message: 'Logging successfully'
    });
});

router.post('/log', function(req, res) {
  
    logger.log(req.body.nama, req.body.api, req.body.request, req.body.response, req.body.header);
    res.send({
        status: 200,
        message: 'Logging successfully'
    });
});

app.use("/", router);