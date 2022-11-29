import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-barras',
  templateUrl: './menu-barras.component.html',
  styleUrls: ['./menu-barras.component.css']
})
export class MenuBarrasComponent implements OnInit {
  title = 'Rivera Designs / Barras'
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'muebles,aluminio,Phifertex,Sunbrella,elegancia,estilo,argentina,exteriores,interiores,sillones,mesas,bancos,banqueta,hamacas,pérgolas,sillas,barras,camastros,puffs,reposeras'},
      {name: 'description', content: 'Nuestras Barras'},
      {name: 'robots', content: 'menu, follow'},
      {name: 'author', content:'haizara'}
    ]);
  }

}
