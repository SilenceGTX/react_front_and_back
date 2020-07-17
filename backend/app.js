var express = require('express');
var cors = require('cors');

const greeting = {"刘备":"玄德公乃仁义之士", "曹操":"快与我活捉曹贼"}

var app = express();

var corsOptions = {
    credentials:true,
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
};
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true})); // 必须要加
app.use(express.json()); // 必须要加

app.get('/', function (req, res) {
    res.send('来者可是诸葛孔明？')
});

app.post('/hello', function (req, res) {
    let grt = greeting[req.body.name]
    res.send(grt)
});

app.listen(5000, function() {
    console.log('App listening on port 5000...')
});