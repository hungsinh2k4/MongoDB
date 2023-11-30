const bodyParser = require('body-parser');
var express = require('express');
var app = express();

//app.listen(8000);

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    // Access form data using req.body
    const { username, email, password } = req.body;

    // Process the form data (you might want to store it in a database, for example)

    // Respond to the client
    res.send(`Registration successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
});

app.listen(8000, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Server is listening on port 8000');
    }
});
