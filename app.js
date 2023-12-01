const bodyParser = require('body-parser');
var express = require('express');
var app = express();

// cau hinh ejs
app.set('view engine', 'ejs');
app.set('views', './views');


// nhan du lieu tu form
app.use(bodyParser.urlencoded({ extended: true }));

var user = require('./models/user');
const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp');


app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.post('/signin', (req, res) => {
    // Access form data using req.body
    const { username, email, password } = req.body;

    // Process the form data (you might want to store it in a database, for example)

    // Respond to the client
    res.send(`Registration successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
});

app.post('/signup', async (req, res) => {
    // Access form data using req.body
    try {
        const newUser = await user.create({ username: req.body.username, email: req.body.email, password: req.body.password });
        // Redirect to the login page
        res.redirect('/signin');
    } catch (err) {
        console.error(err);
        res.send('Error creating user');
    }
});

app.listen(8001, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Server is listening on port 8000');
    }
});
