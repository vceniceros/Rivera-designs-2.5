import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MuebleService } from 'src/app/services/mueblesService';
import { mueble } from 'src/app/models/mueble';
import { MuebleServiceLocalService } from 'src/app/services/mueble-service-local.service';
@Component({
  selector: 'app-muebles-slider',
  templateUrl: './muebles-slider.component.html',
  styleUrls: ['./muebles-slider.component.css']
})
export class MueblesSliderComponent implements OnInit {

  public Mueble: any//mueble = new mueble(0,'','','','','','','','','','','',);
  
  constructor(private mueblesServiceLocal: MuebleServiceLocalService,private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['idmuebles'];
 
    this.Mueble = this.mueblesServiceLocal.getMueble(id);
    
    
  }
   

}
