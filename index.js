const express = require('express');
const exphbs  = require('express-handlebars');
const http = require('http');
const sgMail = require('@sendgrid/mail')
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);


server.listen(process.env.PORT || 3000);

app.use('/public', express.static(__dirname + '/public'))

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');

// Arrays das salas
const arraySalas1Segunda = [
    { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
];
const arraySalas1Terca = [
    { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
];
const arraySalas1Quarta = [
    { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
    { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia:'Quarta', fixo: 0},
];
const arraySalas1Quinta = [
    { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
    { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia:'Quinta', fixo: 0},
];
const arraySalas1Sexta = [
    { id: '001', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '002', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '003', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '004', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '005', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '006', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '007', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '008', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '009', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '010', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '011', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '012', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '013', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '014', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '015', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '016', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '017', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '018', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '019', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '020', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '021', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '022', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '023', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
];
// Sala 2
const arraySalas2Segunda = [
    { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
];
const arraySalas2Terca = [
    { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
];
const arraySalas2Quarta = [
    { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
];
const arraySalas2Quinta = [
    { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
];
const arraySalas2Sexta = [
    { id: '024', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '025', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '026', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '027', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '028', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '029', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '030', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '031', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '032', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '033', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '034', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '035', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '036', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '037', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '038', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '039', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '040', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '041', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '042', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '043', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '044', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '045', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '046', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
];
// Sala3
const arraySalas3Segunda = [
    { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
    { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Segunda', fixo: 0},
];
const arraySalas3Terca = [
    { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
    { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Terca',fixo: 0},
];
const arraySalas3Quarta = [
    { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
    { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quarta', fixo: 0},
];
const arraySalas3Quinta = [
    { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
    { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Quinta', fixo: 0},
];
const arraySalas3Sexta = [
    { id: '047', horario: '7h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '048', horario: '8h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '049', horario: '8h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '050', horario: '9h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '051', horario: '9h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '052', horario: '10h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '053', horario: '10h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '054', horario: '11h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '055', horario: '11h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '056', horario: '12h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '057', horario: '12h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '058', horario: '13h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '059', horario: '13h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '060', horario: '14h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '061', horario: '14h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '062', horario: '15h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '063', horario: '15h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '064', horario: '16h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '065', horario: '16h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '066', horario: '17h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '067', horario: '17h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '068', horario: '18h', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
    { id: '069', horario: '18h30', ocupada: 0, Ocupante:'', dia: 'Sexta', fixo: 0},
];
// Arrays de histórico
const historicoSegunda = []
const historicoTerca = []
const historicoQuarta = []
const historicoQuinta = []
const historicoSexta = []

app.get('/', (req, res) => {
    
    function formatarData(data) {
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
      
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 10 ? '0' + mes : mes;
      
        return dia + '/' + mes + '/' + ano;
      }
      
    // Io
    io.on('connection',(socket) => {
        // Código para criar histórico de salas para o socket.io, ocupando e desocupando salas
        socket.on('historicoSegunda', () => {
            historicoSegunda.forEach(item =>{
                socket.emit('alterarFrontSegunda', item.id, item.nome, item.horario, item.dia, item.fixo)
            })
        })
        socket.on('desocuparSalaSegunda', (id,nome, horario,dia) => {
            const idSala = historicoSegunda.findIndex(element => element.id == id)
            historicoSegunda.splice(idSala, 1)
            socket.emit('reloadPage');
        })
        socket.on('historicoTerca', () => {
            historicoTerca.forEach(item =>{
                socket.emit('alterarFrontTerca', item.id, item.nome, item.horario, item.dia, item.fixo)
            })
        })
        socket.on('desocuparSalaTerca', (id,nome, horario,dia) => {
            const idSala = historicoTerca.findIndex(element => element.id == id)
            historicoTerca.splice(idSala, 1)
            socket.emit('reloadPage');
        })
        socket.on('historicoQuarta', () => {
            historicoQuarta.forEach(item =>{
                socket.emit('alterarFrontQuarta', item.id, item.nome, item.horario, item.dia, item.fixo)
            })
        })
        socket.on('desocuparSalaQuarta', (id,nome, horario,dia) => {
            const idSala = historicoQuarta.findIndex(element => element.id == id)
            historicoQuarta.splice(idSala, 1)
            socket.emit('reloadPage');
        })
        socket.on('historicoQuinta', () => {
            historicoQuinta.forEach(item =>{
                socket.emit('alterarFrontQuinta', item.id, item.nome, item.horario, item.dia, item.fixo)
            })
        })
        socket.on('desocuparSalaQuinta', (id,nome, horario,dia) => {
            const idSala = historicoQuinta.findIndex(element => element.id == id)
            historicoQuinta.splice(idSala, 1)
            socket.emit('reloadPage');
        })
        socket.on('historicoSexta', () => {
            historicoSexta.forEach(item =>{
                socket.emit('alterarFrontSexta', item.id, item.nome, item.horario, item.dia, item.fixo)
            })
        })
        socket.on('desocuparSalaSexta', (id,nome, horario,dia) => {
            const idSala = historicoSexta.findIndex(element => element.id == id)
            historicoSexta.splice(idSala, 1)
            socket.emit('reloadPage');
        })

        // Código para ocupar sala
        // Issue: Diminuir complexidade isolando funções
        socket.on('ocuparSala', (id,nome, horario, dia, fixo) =>{
            console.log(
                `DIA DE OCUPAÇÃO: ${formatarData(new Date)} Sala: ${id} Nome: ${nome} Horario: ${horario} Dia: ${dia}`
            )
            if(dia == 'Segunda'){
                if(id < 24){
                    const idSala1 = arraySalas1Segunda.findIndex(element => element.id == id)
                    arraySalas1Segunda[idSala1].Ocupante = nome
                    arraySalas1Segunda[idSala1].ocupada = 1
                    arraySalas1Segunda[idSala1].fixo = fixo
                    socket.emit('alterarFrontSegunda', id, nome, arraySalas1Segunda[idSala1].horario)
                    historicoSegunda.push({id, nome, horario: arraySalas1Segunda[idSala1].horario, dia, fixo})
                }else if(id < 47){
                    const idSala2 = arraySalas2Segunda.findIndex(element => element.id == id)
                    arraySalas2Segunda[idSala2].Ocupante = nome
                    arraySalas2Segunda[idSala2].ocupada = 1
                    arraySalas2Segunda[idSala2].fixo = fixo
                    socket.emit('alterarFrontSegunda', id, nome, arraySalas2Segunda[idSala2].horario)
                    historicoSegunda.push({id, nome, horario: arraySalas2Segunda[idSala2].horario, dia, fixo})
                    
                }else{
                    const idSala3 = arraySalas3Segunda.findIndex(element => element.id == id)
                    arraySalas3Segunda[idSala3].Ocupante = nome
                    arraySalas3Segunda[idSala3].ocupada = 1
                    arraySalas3Segunda[idSala3].fixo = fixo
                    socket.emit('alterarFrontSegunda', id, nome, arraySalas3Segunda[idSala3].horario)
                    historicoSegunda.push({id, nome, horario: arraySalas3Segunda[idSala3].horario, dia, fixo})
                }
            }else if(dia == 'Terca'){
                if(id < 24){
                    const idSala1 = arraySalas1Terca.findIndex(element => element.id == id)
                    arraySalas1Terca[idSala1].Ocupante = nome
                    arraySalas1Terca[idSala1].ocupada = 1
                    arraySalas1Terca[idSala1].fixo = fixo
                    socket.emit('alterarFrontTerca', id, nome, arraySalas1Terca[idSala1].horario)
                    historicoTerca.push({id, nome, horario: arraySalas1Terca[idSala1].horario, dia, fixo})
                }else if(id < 47){
                    const idSala2 = arraySalas2Terca.findIndex(element => element.id == id)
                    arraySalas2Terca[idSala2].Ocupante = nome
                    arraySalas2Terca[idSala2].ocupada = 1
                    arraySalas2Terca[idSala2].fixo = fixo
                    socket.emit('alterarFrontTerca', id, nome, arraySalas2Terca[idSala2].horario)
                    historicoTerca.push({id, nome, horario: arraySalas2Terca[idSala2].horario, dia, fixo})
                    
                }else{
                    const idSala3 = arraySalas3Terca.findIndex(element => element.id == id)
                    arraySalas3Terca[idSala3].Ocupante = nome
                    arraySalas3Terca[idSala3].ocupada = 1
                    arraySalas3Terca[idSala3].fixo = fixo
                    socket.emit('alterarFrontTerca', id, nome, arraySalas3Terca[idSala3].horario)
                    historicoTerca.push({id, nome, horario: arraySalas3Terca[idSala3].horario, dia, fixo})
                }
            }else if(dia == 'Quarta'){
                if(id < 24){
                    const idSala1 = arraySalas1Quarta.findIndex(element => element.id == id)
                    arraySalas1Quarta[idSala1].Ocupante = nome
                    arraySalas1Quarta[idSala1].ocupada = 1
                    arraySalas1Quarta[idSala1].fixo = fixo
                    socket.emit('alterarFrontQuarta', id, nome, arraySalas1Quarta[idSala1].horario)
                    historicoQuarta.push({id, nome, horario: arraySalas1Quarta[idSala1].horario, dia, fixo})
                }else if(id < 47){
                    const idSala2 = arraySalas2Quarta.findIndex(element => element.id == id)
                    arraySalas2Quarta[idSala2].Ocupante = nome
                    arraySalas2Quarta[idSala2].ocupada = 1
                    arraySalas2Quarta[idSala2].fixo = fixo
                    socket.emit('alterarFrontQuarta', id, nome, arraySalas2Quarta[idSala2].horario)
                    historicoQuarta.push({id, nome, horario: arraySalas2Quarta[idSala2].horario, dia, fixo})
                    
                }else{
                    const idSala3 = arraySalas3Quarta.findIndex(element => element.id == id)
                    arraySalas3Quarta[idSala3].Ocupante = nome
                    arraySalas3Quarta[idSala3].ocupada = 1
                    arraySalas3Quarta[idSala3].fixo = fixo
                    socket.emit('alterarFrontQuarta', id, nome, arraySalas3Quarta[idSala3].horario)
                    historicoQuarta.push({id, nome, horario: arraySalas3Quarta[idSala3].horario, dia, fixo})
                }
            }else if(dia == 'Quinta'){
                if(id < 24){
                    const idSala1 = arraySalas1Quinta.findIndex(element => element.id == id)
                    arraySalas1Quinta[idSala1].Ocupante = nome
                    arraySalas1Quinta[idSala1].ocupada = 1
                    arraySalas1Quinta[idSala1].fixo = fixo
                    socket.emit('alterarFrontQuinta', id, nome, arraySalas1Quinta[idSala1].horario)
                    historicoQuinta.push({id, nome, horario: arraySalas1Quinta[idSala1].horario, dia, fixo})
                }else if(id < 47){
                    const idSala2 = arraySalas2Quinta.findIndex(element => element.id == id)
                    arraySalas2Quinta[idSala2].Ocupante = nome
                    arraySalas2Quinta[idSala2].ocupada = 1
                    arraySalas2Quinta[idSala2].fixo = fixo
                    socket.emit('alterarFrontQuinta', id, nome, arraySalas2Quinta[idSala2].horario)
                    historicoQuinta.push({id, nome, horario: arraySalas2Quinta[idSala2].horario, dia, fixo})
                    
                }else{
                    const idSala3 = arraySalas3Quinta.findIndex(element => element.id == id)
                    arraySalas3Quinta[idSala3].Ocupante = nome
                    arraySalas3Quinta[idSala3].ocupada = 1
                    arraySalas3Quinta[idSala3].fixo = fixo
                    socket.emit('alterarFrontQuinta', id, nome, arraySalas3Quinta[idSala3].horario)
                    historicoQuinta.push({id, nome, horario: arraySalas3Quinta[idSala3].horario, dia, fixo})
                }
            }else{
                if(id < 24){
                    const idSala1 = arraySalas1Sexta.findIndex(element => element.id == id)
                    arraySalas1Sexta[idSala1].Ocupante = nome
                    arraySalas1Sexta[idSala1].ocupada = 1
                    arraySalas1Sexta[idSala1].fixo = fixo
                    socket.emit('alterarFrontSexta', id, nome, arraySalas1Sexta[idSala1].horario)
                    historicoSexta.push({id, nome, horario: arraySalas1Sexta[idSala1].horario, dia, fixo})
                }else if(id < 47){
                    const idSala2 = arraySalas2Sexta.findIndex(element => element.id == id)
                    arraySalas2Sexta[idSala2].Ocupante = nome
                    arraySalas2Sexta[idSala2].ocupada = 1
                    arraySalas2Sexta[idSala2].fixo = fixo
                    socket.emit('alterarFrontSexta', id, nome, arraySalas2Sexta[idSala2].horario)
                    historicoSexta.push({id, nome, horario: arraySalas2Sexta[idSala2].horario, dia, fixo})
                    
                }else{
                    const idSala3 = arraySalas3Sexta.findIndex(element => element.id == id)
                    arraySalas3Sexta[idSala3].Ocupante = nome
                    arraySalas3Sexta[idSala3].ocupada = 1
                    arraySalas3Sexta[idSala3].fixo = fixo
                    socket.emit('alterarFrontSexta', id, nome, arraySalas3Sexta[idSala3].horario)
                    historicoSexta.push({id, nome, horario: arraySalas3Sexta[idSala3].horario, dia, fixo})
                }
            }
        })
    })
      
    res.render('index.hbs', {arraySalas1Segunda, arraySalas1Terca, arraySalas1Quarta,
        arraySalas1Quinta,arraySalas1Sexta, arraySalas2Segunda, arraySalas2Terca, arraySalas2Quarta,
        arraySalas2Quinta,arraySalas2Sexta,arraySalas3Segunda, arraySalas3Terca, arraySalas3Quarta,
        arraySalas3Quinta,arraySalas3Sexta});
})

app.get('/salasReturn', (req, res) => {
    console.log('Acessou a rota.')
    setInterval( function() {
        let historicoSegundaArray = []
        let historicoTercaArray = []
        let historicoQuartaArray = []
        let historicoQuintaArray = []
        let historicoSextaArray = []
        historicoSegunda.forEach(item =>{
            if( item.id < 24){
                historicoSegundaArray.push('Sala 1, Segunda-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else if(item.id > 23 && item.id < 47){
                historicoSegundaArray.push('Sala 2, Segunda-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else{
                historicoSegundaArray.push('Sala 3, Segunda-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }
        })
        historicoTerca.forEach(item =>{
            if( item.id < 24){
                historicoTercaArray.push('Sala 1, Terca-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else if(item.id > 23 && item.id < 47){
                historicoTercaArray.push('Sala 2, Terca-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else{
                historicoTercaArray.push('Sala 3, Terca-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }
        })
        historicoQuarta.forEach(item =>{
            if( item.id < 24){
                historicoQuartaArray.push('Sala 1, Quarta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else if(item.id > 23 && item.id < 47){
                historicoQuartaArray.push('Sala 2, Quarta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else{
                historicoQuartaArray.push('Sala 3, Quarta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }
        })
        historicoQuinta.forEach(item =>{
            if( item.id < 24){
                historicoQuintaArray.push('Sala 1, Quinta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else if(item.id > 23 && item.id < 47){
                historicoQuintaArray.push('Sala 2, Quinta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else{
                historicoQuintaArray.push('Sala 3, Quinta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }
        })
        historicoSexta.forEach(item =>{
            if( item.id < 24){
                historicoSextaArray.push('Sala 1, Sexta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else if(item.id > 23 && item.id < 47){
                historicoSextaArray.push('Sala 2, Sexta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }else{
                historicoSextaArray.push('Sala 3, Sexta-Feira, Horário:'+ item.horario + ' Pessoa: ' + item.nome)
            }
        })
        sgMail.setApiKey('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')
        const msg = {
        to: 'fisiomi123@gmail.com', // Change to your recipient
        from: 'fisiomi123@gmail.com', // Change to your verified sender
        subject: 'Checagem de Salas',
        text: 'Relatório',
        html: `
                <strong>Segunda-Feira:</strong>
                ${JSON.stringify({historicoSegundaArray})}
                -
                <strong>Terca-Feira:</strong>
                ${JSON.stringify({historicoTercaArray})}
                -
                <strong>Quarta-Feira:</strong>
                ${JSON.stringify({historicoQuartaArray})}
                -
                <strong>Quinta-Feira:</strong>
                ${JSON.stringify({historicoQuintaArray})}
                -
                <strong>Sexta-Feira:</strong>
                ${JSON.stringify({historicoSextaArray})}
        `
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
    }, 3600000 );
    res.json({historicoSegunda, historicoTerca, historicoQuarta, historicoQuinta, historicoSexta});
})

http.get('http://agendamento-fisio-production.up.railway.app/salasReturn', (response) => {
    console.log('Rota acessada automaticamente.');
})


console.log('Projeto rodando com sucesso.');