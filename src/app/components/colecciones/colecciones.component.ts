import { Component, OnInit } from '@angular/core';
import { mueblesMenu } from 'src/app/models/muebleMenu';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {
  public colecciones: mueblesMenu[] | undefined;
  constructor() {
    this.colecciones=[
      new mueblesMenu(1,"Colección Formentera","Formentera","https://i.ibb.co/6s8y5Sr/1-10-1.jpg","https://i.ibb.co/8BbCTTJ/1-7-2.jpg"),
      new mueblesMenu(2,"Colección Modena","Modena","https://i.ibb.co/hM6XnTg/2-13-1.jpg","https://i.ibb.co/pZPRhgd/2-2-4.jpg"),
      new mueblesMenu(3,"Colección Tirreno","Tirreno","https://i.ibb.co/tBSfkr9/3-6-1.jpg","https://i.ibb.co/2Pnpz5q/3-1-1.jpg"),
      new mueblesMenu(4,"Colección Alumad","Alumad","https://i.ibb.co/9GFf6k7/6-1-1.jpg","https://i.ibb.co/Db4PLBH/6-1-3.jpg"),
      new mueblesMenu(5,"Colección Deck","Deck","https://i.ibb.co/y5zSrhw/8-3-1.jpg ","https://i.ibb.co/1fY5Z68/8-4-1.jpg"),
      new mueblesMenu(6,"Colección Dot","Dot","https://i.ibb.co/pnCKxyK/5-1-1.jpg" ,"https://i.ibb.co/CnDxS6Z/5-1-4.jpg"),
      new mueblesMenu(7,"Colección Belt","Belt","https://i.ibb.co/JzNN1y8/7-1-1.jpg","https://i.ibb.co/nL31Vzs/7-3-3.jpg"),
      new mueblesMenu(8,"Colección Especial","Especial","https://i.ibb.co/HTyPFrb/9-1-1.jpg","https://i.ibb.co/tBJt4VT/9-7-1.jpg")
    ]
   }

  ngOnInit(): void {
  }
}
