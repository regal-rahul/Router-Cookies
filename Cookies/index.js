const express = require('express');
const app = express();

const cookieparser = require('cookie-parser');
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey There, ${name}`);
})
app.get('/setname', (req, res) => {
    res.cookie('name', 'tommy');
    res.cookie('animal', 'dog');
    res.cookie('color', 'golden');
    res.send('Sent you a cookie');
})

app.get('/getsignedcookies', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})