const { response } = require('express');
const bodyParser = require('body-parser');
const express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
let data = require('./json/data-user.json');
app.use(express.json());

// set template engine yg akan digunakan
app.set('view engine', 'ejs');
// buat folder views

app.set('views', './public/views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
// var users = {email: 'testing@gmail.com', password: 'testing123'};
// dataJSON = JSON.stringify(users, null, 2);
// fs.writeFileSync(__dirname + '/json/data-user.json', dataJSON);
// console.log(dataJSON);

app.get('/', (require, response) => {
    // response.json(users);
    const notif = require.query.notif;
    response.render('form-login', {data, notif:notif})
});

app.post('/', (require, response) => {
    let dataUser = JSON.parse(fs.readFileSync(__dirname + "/json/data-user.json"))
    console.log(dataUser);
    let dataInput = {
        email: require.body.alamatemail, 
        password: require.body.password
    }
    if (dataUser.email == dataInput.email && dataUser.password == dataInput.password){
        response.redirect('/home');
    }else {
        //menyimpan riwayat terakhir data input user di json
        dataInput = JSON.stringify(dataInput, null, 4)
        fs.writeFileSync(__dirname + "/json/data-input.json", dataInput);
        console.log(dataInput);

        response.redirect("/?notif=gagallogin")
    }
})

app.get('/home', (require,response) => {
    response.render('home');
})
app.get('/game-rps', (request, response) => {
    response.sendFile(__dirname + '/game-rps.html');
})


app.listen(4000);