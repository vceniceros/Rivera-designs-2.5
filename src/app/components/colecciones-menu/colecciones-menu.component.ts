import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-colecciones-menu',
  templateUrl: './colecciones-menu.component.html',
  styleUrls: ['./colecciones-menu.component.css']
})
export class ColeccionesMenuComponent implements OnInit {
  title = 'Rivera Designs / Colecciones'

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'muebles,aluminio,Phifertex,Sunbrella,elegancia,estilo,argentina,exteriores,interiores,sillones,mesas,bancos,banqueta,hamacas,pérgolas,sillas,barras,camastros,puffs,reposeras'},
      {name: 'description', content: 'Estas son las Colecciones que ofrecemos'},
      {name: 'robots', content: 'menu, follow'},
      {name: 'author', content:'haizara'}
    ]);
  }

}
