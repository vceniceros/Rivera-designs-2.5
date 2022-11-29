import express, {Request, Response} from 'express';
import path from 'path';

class IndexController {
   public index  (req:Request, res: Response)  {
    res.sendFile(path.join(__dirname + '../../../../dist/index.html'))
   }
}
const indexController = new IndexController();
export default indexController;