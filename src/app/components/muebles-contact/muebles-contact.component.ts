import { Component, OnInit } from '@angular/core';
import { Form, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { MuebleService } from 'src/app/services/mueblesService';
import { mueble } from 'src/app/models/mueble';
import { MuebleServiceLocalService } from 'src/app/services/mueble-service-local.service';
@Component({
  selector: 'app-muebles-contact',
  templateUrl: './muebles-contact.component.html',
  styleUrls: ['./muebles-contact.component.css'],
})
export class MueblesContactComponent implements OnInit {
  public Mueble: any//mueble = new mueble(0,'','','','','','','','','','','',);
 
  constructor(private mueblesServiceLocal: MuebleServiceLocalService,private activatedRoute: ActivatedRoute, public _EmailService: EmailService) {
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['idmuebles'];
 
    this.Mueble = this.mueblesServiceLocal.getMueble(id);

    
  }
  contactForm(form: Form){
    Validators.required,
    this._EmailService.sendMessage(form).subscribe(()=>{
      alert('mensaje enviado exitosamente')
      console.log(form)
    })
  }
    

}
