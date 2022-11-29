import { Component, OnInit } from '@angular/core';
import { mueblesMenu } from 'src/app/models/muebleMenu';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public muebles: mueblesMenu[] | undefined;
  constructor() {
    this.muebles = [
      new mueblesMenu(1,"Sillones", " ","https://i.ibb.co/80vzFsm/20-20-20.jpg","https://i.ibb.co/tBSfkr9/3-6-1.jpg"),
      new mueblesMenu(2,"Mesas", " ","https://i.ibb.co/BNjWXVj/2-7-2.jpg","https://i.ibb.co/Yb0960h/2-7-1.jpg"),
      new mueblesMenu(3,"Puffs", " ","https://i.ibb.co/GRBSpmB/2-4-4.jpg","https://i.ibb.co/2NN9cfw/7-6-1.jpg"),
      new mueblesMenu(4,"Reposeras", " ","https://i.ibb.co/xgN5d2z/2-9-1.jpg","https://i.ibb.co/b705w7G/1-8-1.jpg"),
      new mueblesMenu(5,"Camastros", " ","https://i.ibb.co/hM6XnTg/2-13-1.jpg","https://i.ibb.co/z5zbjFT/9-1-1.jpg"),
      new mueblesMenu(6,"Barras", " ","https://i.ibb.co/GsXzbR5/3-3-1.jpg","https://i.ibb.co/XbqkNfM/1-10-1.jpg"),
      new mueblesMenu(7,"Banquetas", " ","https://i.ibb.co/LxYjb5f/1-14-1.jpg","https://i.ibb.co/gwDNyR3/2-16-1.jpg"),
      new mueblesMenu(8,"Bancos", " ","https://i.ibb.co/8667PwD/3-4-3.jpg","https://i.ibb.co/27Zpzst/6-5-1.jpg"),
      new mueblesMenu(9,"Sillas", " ","https://i.ibb.co/2gSn1fT/6-4-1.jpg","https://i.ibb.co/zhNvnFh/8-1-1.jpg"),
      new mueblesMenu(10,"Hamacas", " ","https://i.ibb.co/q9Msmfh/9-5-1.jpg","https://i.ibb.co/tBJt4VT/9-7-1.jpg"),
      new mueblesMenu(11,"Pergolas", " ","https://i.ibb.co/HTyPFrb/9-1-1.jpg","https://i.ibb.co/Kh4wrf4/9-8-3.jpg"),
    ]
   }

  ngOnInit(): void {
  }

}
