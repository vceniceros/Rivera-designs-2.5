import { Router } from 'express';
import emailController from '../controllers/emailController';

class EmailRoutes{
    public router: Router = Router();

    constructor(){
        this.config()
    }
    config(): void{
        this.router.post('/email',(req, res) => {
            emailController.Email(req.body);
            res.status(200).send();})
    }
}
const emailRoutes = new EmailRoutes();
export default emailRoutes.router;