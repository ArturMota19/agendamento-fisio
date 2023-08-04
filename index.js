const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);

app.use('/public', express.static(__dirname + '/public'))

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index.hbs')
})

console.log('Rodando na porta 3000');