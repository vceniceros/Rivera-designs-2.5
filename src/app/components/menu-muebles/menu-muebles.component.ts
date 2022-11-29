import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mueblesMenu } from 'src/app/models/muebleMenu';
import { MuebleMenuService } from '../../services/muebleMenu.service';
@Component({
  selector: 'app-menu-muebles',
  templateUrl: './menu-muebles.component.html',
  styleUrls: ['./menu-muebles.component.css'],
  providers: [MuebleMenuService]
})
export class MenuMueblesComponent implements OnInit {
  public menuMuebles: mueblesMenu[] ;
  constructor( private _muebleMenuService: MuebleMenuService,public router: Router){
   this.menuMuebles = this._muebleMenuService.getMuebleMenu();
  }
 
/*new mueblesMenu("", "", "", ""),*/
  ngOnInit(): void {
  }

}

