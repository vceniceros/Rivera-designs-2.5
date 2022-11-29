import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyparser from 'body-parser';
import indexRoutes from './routes/indexRoutes';
import emailRoutes from './routes/emailRoutes';
import path from 'path';


class Server {
    public app: Application; 

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.static(path.join(__dirname , '../../dist/')));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(bodyparser());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{
        this.app.use('/api/formulario',emailRoutes);
        this.app.use('/*',indexRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'),()=> {
            console.log('Server on port', this.app.get('port'));
        })
    }
    
}

const server = new Server();
server.start;
