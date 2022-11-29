import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { mueblesMenu } from 'src/app/models/muebleMenu';
import { MuebleMenuService } from '../../services/muebleMenu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MuebleService } from 'src/app/services/mueblesService';
import { mueble } from 'src/app/models/mueble';

@Component({
  selector: 'app-coleccion-slider',
  templateUrl: './coleccion-slider.component.html',
  styleUrls: ['./coleccion-slider.component.css'],
  providers: [MuebleMenuService],
})
export class ColeccionSliderComponent implements OnInit {
  public menuMuebles: mueblesMenu[];
  public Mueble: any; //mueble = new mueble(0,'','','','','','','','','','','',);

  constructor(
    private _muebleMenuService: MuebleMenuService,
    private mueblesService: MuebleService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.menuMuebles = this._muebleMenuService.getMuebleMenu();
  }
  ngOnInit(): void {
     //la funcion paraque funcione el slider
     let items = document.querySelectorAll('.carousel .carousel-item');

     items.forEach((el) => {
       const minPerSlide = 4;
       let next = el.nextElementSibling;
       for (var i = 1; i < minPerSlide; i++) {
         if (!next) {
           // wrap carousel by using first child
           next = items[0];
         }
         let cloneChild = next.cloneNode(true);
         el.appendChild(cloneChild.childNodes[0]);
         next = next.nextElementSibling;
         console.log('holaaa')
       }
     });
    //la funcion para extraer el resto de productos de la bd
   /* mueble: this.Mueble = {
      idmueble: 0,
      nombre: '',
      tipo: '',
      coleccion: '',
      descripcion: '',
      croquis: '',
      medidas: '',
      imgUrl1: '',
      imgUrl2: '',
      imgUrl3: '',
      imgUrl4: '',
      imgUrl5: '',
    };
    const params = this.activatedRoute.snapshot.params;
    this.mueblesService.getMueble(params['idmuebles']).subscribe(
      (res) => {
        console.log(res);
        this.Mueble = res;
        return res;
      },
      (err) => console.log(err)
    );
   
*/    
    
    
  }
}
