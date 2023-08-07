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
    const arraySalas1Segunda = [
        { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
    ];
    const arraySalas1Terca = [
        { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
    ];
    const arraySalas1Quarta = [
        { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia:'Quarta'},
        { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia:'Quarta'},
    ];
    const arraySalas1Quinta = [
        { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia:'Quinta'},
        { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia:'Quinta'},
    ];
    const arraySalas1Sexta = [
        { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
    ];
    // Sala 2
    const arraySalas2Segunda = [
        { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
    ];
    const arraySalas2Terca = [
        { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
    ];
    const arraySalas2Quarta = [
        { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
    ];
    const arraySalas2Quinta = [
        { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
    ];
    const arraySalas2Sexta = [
        { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
    ];
    // Sala3
    const arraySalas3Segunda = [
        { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Segunda'},
        { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Segunda'},
    ];
    const arraySalas3Terca = [
        { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Terca'},
        { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Terca'},
    ];
    const arraySalas3Quarta = [
        { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quarta'},
        { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quarta'},
    ];
    const arraySalas3Quinta = [
        { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quinta'},
        { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quinta'},
    ];
    const arraySalas3Sexta = [
        { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Sexta'},
        { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Sexta'},
    ];
    const historicoSegunda = []
    const historicoTerca = []
    const historicoQuarta = []
    const historicoQuinta = []
    const historicoSexta = []
    // Io
    io.on('connection',(socket) => {
        socket.on('historicoSegunda', () => {
            historicoSegunda.forEach(item =>{
                socket.emit('alterarFrontSegunda', item.id, item.nome, item.horario, item.dia)
            })
        })
        socket.on('desocuparSalaSegunda', (id,nome, horario,dia) => {
            historicoSegunda.splice(element => element.id == id && element.nome == nome)
            socket.emit('reloadPage');
        })
        socket.on('historicoTerca', () => {
            historicoTerca.forEach(item =>{
                socket.emit('alterarFrontTerca', item.id, item.nome, item.horario, item.dia)
            })
        })
        socket.on('desocuparSalaTerca', (id,nome, horario,dia) => {
            historicoTerca.splice(element => element.id == id && element.nome == nome)
            socket.emit('reloadPage');
        })
        socket.on('historicoQuarta', () => {
            historicoQuarta.forEach(item =>{
                socket.emit('alterarFrontQuarta', item.id, item.nome, item.horario, item.dia)
            })
        })
        socket.on('desocuparSalaQuarta', (id,nome, horario,dia) => {
            historicoQuarta.splice(element => element.id == id && element.nome == nome)
            socket.emit('reloadPage');
        })
        socket.on('historicoQuinta', () => {
            historicoQuinta.forEach(item =>{
                socket.emit('alterarFrontQuinta', item.id, item.nome, item.horario, item.dia)
            })
        })
        socket.on('desocuparSalaQuinta', (id,nome, horario,dia) => {
            historicoQuinta.splice(element => element.id == id && element.nome == nome)
            socket.emit('reloadPage');
        })
        socket.on('historicoSexta', () => {
            historicoSexta.forEach(item =>{
                socket.emit('alterarFrontSexta', item.id, item.nome, item.horario, item.dia)
            })
        })
        socket.on('desocuparSalaSexta', (id,nome, horario,dia) => {
            historicoSexta.splice(element => element.id == id && element.nome == nome)
            socket.emit('reloadPage');
        })
        
        socket.on('ocuparSala', (id,nome, horario, dia) =>{
            if(dia == 'Segunda'){
                if(id < 24){
                    const idSala1 = arraySalas1Segunda.findIndex(element => element.id == id)
                    arraySalas1Segunda[idSala1].Ocupante = nome
                    arraySalas1Segunda[idSala1].ocupada = 1
                    socket.emit('alterarFrontSegunda', id, nome, arraySalas1Segunda[idSala1].horario)
                    historicoSegunda.push({id, nome, horario: arraySalas1Segunda[idSala1].horario, dia})
                }else if(id < 47){
                    const idSala2 = arraySalas2Segunda.findIndex(element => element.id == id)
                    arraySalas2Segunda[idSala2].Ocupante = nome
                    arraySalas2Segunda[idSala2].ocupada = 1
                    socket.emit('alterarFrontSegunda', id, nome, arraySalas2Segunda[idSala2].horario)
                    historicoSegunda.push({id, nome, horario: arraySalas2Segunda[idSala2].horario, dia})
                    
                }else{
                    const idSala3 = arraySalas3Segunda.findIndex(element => element.id == id)
                    arraySalas3Segunda[idSala3].Ocupante = nome
                    arraySalas3Segunda[idSala3].ocupada = 1
                    socket.emit('alterarFrontSegunda', id, nome, arraySalas3Segunda[idSala3].horario)
                    historicoSegunda.push({id, nome, horario: arraySalas3Segunda[idSala3].horario, dia})
                }
            }else if(dia == 'Terca'){
                if(id < 24){
                    const idSala1 = arraySalas1Terca.findIndex(element => element.id == id)
                    arraySalas1Terca[idSala1].Ocupante = nome
                    arraySalas1Terca[idSala1].ocupada = 1
                    socket.emit('alterarFrontTerca', id, nome, arraySalas1Terca[idSala1].horario)
                    historicoTerca.push({id, nome, horario: arraySalas1Terca[idSala1].horario, dia})
                }else if(id < 47){
                    const idSala2 = arraySalas2Terca.findIndex(element => element.id == id)
                    arraySalas2Terca[idSala2].Ocupante = nome
                    arraySalas2Terca[idSala2].ocupada = 1
                    socket.emit('alterarFrontTerca', id, nome, arraySalas2Terca[idSala2].horario)
                    historicoTerca.push({id, nome, horario: arraySalas2Terca[idSala2].horario, dia})
                    
                }else{
                    const idSala3 = arraySalas3Terca.findIndex(element => element.id == id)
                    arraySalas3Terca[idSala3].Ocupante = nome
                    arraySalas3Terca[idSala3].ocupada = 1
                    socket.emit('alterarFrontTerca', id, nome, arraySalas3Terca[idSala3].horario)
                    historicoTerca.push({id, nome, horario: arraySalas3Terca[idSala3].horario, dia})
                }
            }else if(dia == 'Quarta'){
                if(id < 24){
                    const idSala1 = arraySalas1Quarta.findIndex(element => element.id == id)
                    arraySalas1Quarta[idSala1].Ocupante = nome
                    arraySalas1Quarta[idSala1].ocupada = 1
                    socket.emit('alterarFrontQuarta', id, nome, arraySalas1Quarta[idSala1].horario)
                    historicoQuarta.push({id, nome, horario: arraySalas1Quarta[idSala1].horario, dia})
                }else if(id < 47){
                    const idSala2 = arraySalas2Quarta.findIndex(element => element.id == id)
                    arraySalas2Quarta[idSala2].Ocupante = nome
                    arraySalas2Quarta[idSala2].ocupada = 1
                    socket.emit('alterarFrontQuarta', id, nome, arraySalas2Quarta[idSala2].horario)
                    historicoQuarta.push({id, nome, horario: arraySalas2Quarta[idSala2].horario, dia})
                    
                }else{
                    const idSala3 = arraySalas3Quarta.findIndex(element => element.id == id)
                    arraySalas3Quarta[idSala3].Ocupante = nome
                    arraySalas3Quarta[idSala3].ocupada = 1
                    socket.emit('alterarFrontQuarta', id, nome, arraySalas3Quarta[idSala3].horario)
                    historicoQuarta.push({id, nome, horario: arraySalas3Quarta[idSala3].horario, dia})
                }
            }else if(dia == 'Quinta'){
                if(id < 24){
                    const idSala1 = arraySalas1Quinta.findIndex(element => element.id == id)
                    arraySalas1Quinta[idSala1].Ocupante = nome
                    arraySalas1Quinta[idSala1].ocupada = 1
                    socket.emit('alterarFrontQuinta', id, nome, arraySalas1Quinta[idSala1].horario)
                    historicoQuinta.push({id, nome, horario: arraySalas1Quinta[idSala1].horario, dia})
                }else if(id < 47){
                    const idSala2 = arraySalas2Quinta.findIndex(element => element.id == id)
                    arraySalas2Quinta[idSala2].Ocupante = nome
                    arraySalas2Quinta[idSala2].ocupada = 1
                    socket.emit('alterarFrontQuinta', id, nome, arraySalas2Quinta[idSala2].horario)
                    historicoQuinta.push({id, nome, horario: arraySalas2Quinta[idSala2].horario, dia})
                    
                }else{
                    const idSala3 = arraySalas3Quinta.findIndex(element => element.id == id)
                    arraySalas3Quinta[idSala3].Ocupante = nome
                    arraySalas3Quinta[idSala3].ocupada = 1
                    socket.emit('alterarFrontQuinta', id, nome, arraySalas3Quinta[idSala3].horario)
                    historicoQuinta.push({id, nome, horario: arraySalas3Quinta[idSala3].horario, dia})
                }
            }else{
                if(id < 24){
                    const idSala1 = arraySalas1Sexta.findIndex(element => element.id == id)
                    arraySalas1Sexta[idSala1].Ocupante = nome
                    arraySalas1Sexta[idSala1].ocupada = 1
                    socket.emit('alterarFrontSexta', id, nome, arraySalas1Sexta[idSala1].horario)
                    historicoSexta.push({id, nome, horario: arraySalas1Sexta[idSala1].horario, dia})
                }else if(id < 47){
                    const idSala2 = arraySalas2Sexta.findIndex(element => element.id == id)
                    arraySalas2Sexta[idSala2].Ocupante = nome
                    arraySalas2Sexta[idSala2].ocupada = 1
                    socket.emit('alterarFrontSexta', id, nome, arraySalas2Sexta[idSala2].horario)
                    historicoSexta.push({id, nome, horario: arraySalas2Sexta[idSala2].horario, dia})
                    
                }else{
                    const idSala3 = arraySalas3Sexta.findIndex(element => element.id == id)
                    arraySalas3Sexta[idSala3].Ocupante = nome
                    arraySalas3Sexta[idSala3].ocupada = 1
                    socket.emit('alterarFrontSexta', id, nome, arraySalas3Sexta[idSala3].horario)
                    historicoSexta.push({id, nome, horario: arraySalas3Sexta[idSala3].horario, dia})
                }
            }
        })
    })
    res.render('index.hbs', {arraySalas1Segunda, arraySalas1Terca, arraySalas1Quarta,
        arraySalas1Quinta,arraySalas1Sexta, arraySalas2Segunda, arraySalas2Terca, arraySalas2Quarta,
        arraySalas2Quinta,arraySalas2Sexta,arraySalas3Segunda, arraySalas3Terca, arraySalas3Quarta,
        arraySalas3Quinta,arraySalas3Sexta});
})

console.log('Rodando na porta 3000');