const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.render('hello.js');
})

app.listen(3000);