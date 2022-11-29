import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-tirreno',
  templateUrl: './menu-tirreno.component.html',
  styleUrls: ['./menu-tirreno.component.css']
})
export class MenuTirrenoComponent implements OnInit {
  title = 'Rivera Designs / Tirreno'
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'muebles,aluminio,Phifertex,Sunbrella,elegancia,estilo,argentina,exteriores,interiores,sillones,mesas,bancos,banqueta,hamacas,pérgolas,sillas,barras,camastros,puffs,reposeras'},
      {name: 'description', content: 'Colección Tirreno'},
      {name: 'robots', content: 'menu, follow'},
      {name: 'author', content:'haizara'}
    ]);
  }

}
