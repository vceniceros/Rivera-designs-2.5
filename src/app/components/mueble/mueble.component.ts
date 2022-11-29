import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MuebleService } from 'src/app/services/mueblesService';
import { mueble } from 'src/app/models/mueble';
import { MuebleServiceLocalService } from 'src/app/services/mueble-service-local.service';
import { ParsedPropertyType, Parser } from '@angular/compiler';
@Component({
  selector: 'app-mueble',
  templateUrl: './mueble.component.html',
  styleUrls: ['./mueble.component.css']
})
export class MuebleComponent implements OnInit {
  
  public Mueble: any//mueble = new mueble(0,'','','','','','','','','','','',);
  constructor(private mueblesServiceLocal: MuebleServiceLocalService,private router: Router, private activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit(): void {
    //this.Mueble = new mueble(0,'pepe','','','','','','','','','','',);
   const id = this.activatedRoute.snapshot.params['idmuebles'];
 
    this.Mueble = this.mueblesServiceLocal.getMueble(id);
    
    
  }
  

}
