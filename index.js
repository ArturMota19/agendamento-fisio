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
    const historico = []
    // Io
    io.on('connection',(socket) =>{
        console.log('nova conexao')
        historico.forEach(item =>{
            socket.emit('mudarCorBg')
        })

        socket.on('ocuparSala', (id,nome) =>{
            console.log(id,nome)
            historico.push('mudarCorBg')
        })
    })
    const arraySalas1 = [
        { id: '001', horario: '7h30', ocupada: 0, Ocupante:''},
        { id: '002', horario: '8h', ocupada: 0, Ocupante:''},
        { id: '003', horario: '8h30', ocupada: 0, Ocupante:''},
        { id: '004', horario: '9h', ocupada: 0, Ocupante:''},
        { id: '005', horario: '9h30', ocupada: 0, Ocupante:''},
        { id: '006', horario: '10h', ocupada: 0, Ocupante:''},
        { id: '007', horario: '10h30', ocupada: 0, Ocupante:''},
        { id: '008', horario: '11h', ocupada: 0, Ocupante:''},
        { id: '009', horario: '11h30', ocupada: 0, Ocupante:''},
        { id: '010', horario: '12h', ocupada: 0, Ocupante:''},
        { id: '011', horario: '12h30', ocupada: 0, Ocupante:''},
        { id: '012', horario: '13h', ocupada: 0, Ocupante:''},
        { id: '013', horario: '13h30', ocupada: 0, Ocupante:''},
        { id: '014', horario: '14h', ocupada: 0, Ocupante:''},
        { id: '015', horario: '14h30', ocupada: 0, Ocupante:''},
        { id: '016', horario: '15h', ocupada: 0, Ocupante:''},
        { id: '017', horario: '15h30', ocupada: 0, Ocupante:''},
        { id: '018', horario: '16h', ocupada: 0, Ocupante:''},
        { id: '019', horario: '16h30', ocupada: 0, Ocupante:''},
        { id: '020', horario: '17h', ocupada: 0, Ocupante:''},
        { id: '021', horario: '17h30', ocupada: 0, Ocupante:''},
        { id: '022', horario: '18h', ocupada: 0, Ocupante:''},
        { id: '023', horario: '18h30', ocupada: 0, Ocupante:''},
    ];
    const arraySalas2 = [
        { id: '024', horario: '7h30', ocupada: 0, Ocupante:''},
        { id: '025', horario: '8h', ocupada: 0, Ocupante:''},
        { id: '026', horario: '8h30', ocupada: 0, Ocupante:''},
        { id: '027', horario: '9h', ocupada: 0, Ocupante:''},
        { id: '028', horario: '9h30', ocupada: 0, Ocupante:''},
        { id: '029', horario: '10h', ocupada: 0, Ocupante:''},
        { id: '030', horario: '10h30', ocupada: 0, Ocupante:''},
        { id: '031', horario: '11h', ocupada: 0, Ocupante:''},
        { id: '032', horario: '11h30', ocupada: 0, Ocupante:''},
        { id: '033', horario: '12h', ocupada: 0, Ocupante:''},
        { id: '034', horario: '12h30', ocupada: 0, Ocupante:''},
        { id: '035', horario: '13h', ocupada: 0, Ocupante:''},
        { id: '036', horario: '13h30', ocupada: 0, Ocupante:''},
        { id: '037', horario: '14h', ocupada: 0, Ocupante:''},
        { id: '038', horario: '14h30', ocupada: 0, Ocupante:''},
        { id: '039', horario: '15h', ocupada: 0, Ocupante:''},
        { id: '040', horario: '15h30', ocupada: 0, Ocupante:''},
        { id: '041', horario: '16h', ocupada: 0, Ocupante:''},
        { id: '042', horario: '16h30', ocupada: 0, Ocupante:''},
        { id: '043', horario: '17h', ocupada: 0, Ocupante:''},
        { id: '044', horario: '17h30', ocupada: 0, Ocupante:''},
        { id: '045', horario: '18h', ocupada: 0, Ocupante:''},
        { id: '046', horario: '18h30', ocupada: 0, Ocupante:''},
    ];
    const arraySalas3 = [
        { id: '047', horario: '7h30', ocupada: 0, Ocupante:''},
        { id: '048', horario: '8h', ocupada: 0, Ocupante:''},
        { id: '049', horario: '8h30', ocupada: 0, Ocupante:''},
        { id: '050', horario: '9h', ocupada: 0, Ocupante:''},
        { id: '051', horario: '9h30', ocupada: 0, Ocupante:''},
        { id: '052', horario: '10h', ocupada: 0, Ocupante:''},
        { id: '053', horario: '10h30', ocupada: 0, Ocupante:''},
        { id: '054', horario: '11h', ocupada: 0, Ocupante:''},
        { id: '055', horario: '11h30', ocupada: 0, Ocupante:''},
        { id: '056', horario: '12h', ocupada: 0, Ocupante:''},
        { id: '057', horario: '12h30', ocupada: 0, Ocupante:''},
        { id: '058', horario: '13h', ocupada: 0, Ocupante:''},
        { id: '059', horario: '13h30', ocupada: 0, Ocupante:''},
        { id: '060', horario: '14h', ocupada: 0, Ocupante:''},
        { id: '061', horario: '14h30', ocupada: 0, Ocupante:''},
        { id: '062', horario: '15h', ocupada: 0, Ocupante:''},
        { id: '063', horario: '15h30', ocupada: 0, Ocupante:''},
        { id: '064', horario: '16h', ocupada: 0, Ocupante:''},
        { id: '065', horario: '16h30', ocupada: 0, Ocupante:''},
        { id: '066', horario: '17h', ocupada: 0, Ocupante:''},
        { id: '067', horario: '17h30', ocupada: 0, Ocupante:''},
        { id: '068', horario: '18h', ocupada: 0, Ocupante:''},
        { id: '069', horario: '18h30', ocupada: 0, Ocupante:''},
    ];
    res.render('index.hbs', {arraySalas1, arraySalas2, arraySalas3});
})

console.log('Rodando na porta 3000');