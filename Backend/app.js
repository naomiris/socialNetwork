const express =require ('express');
const  morgan =require ('morgan')
const server = express();
server.name ="API"

require('./db')
server.use(express.urlencoded({ extended: false, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
// server.use(cookieParser());

server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:300*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

require('./src/routes')

//MANEJO DE ERRORES
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

//
  server.set('port', process.env.PORT || 3001)
  server.listen(server.get('port'), ()=>console.log(`I'm in http://localhost:${server.get('port')}`))