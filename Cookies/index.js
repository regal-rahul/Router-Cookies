const express = require('express');
const app = express();


app.get('/greet', (req, res) => {
    res.send('Hey There!');
})
app.get('/setname', (req, res) => {
    res.cookie('name', 'tommy');
    res.send('Sent you a cookie');
})

app.listen(30000, () => {
    console.log('Serving on port 3000');
})