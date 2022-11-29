import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-reposeras',
  templateUrl: './menu-reposeras.component.html',
  styleUrls: ['./menu-reposeras.component.css']
})
export class MenuReposerasComponent implements OnInit {
  title = 'Rivera Designs / Reposeras'
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'muebles,aluminio,Phifertex,Sunbrella,elegancia,estilo,argentina,exteriores,interiores,sillones,mesas,bancos,banqueta,hamacas,pérgolas,sillas,barras,camastros,puffs,reposeras'},
      {name: 'description', content: 'Nuestras Reposeras'},
      {name: 'robots', content: 'menu, follow'},
      {name: 'author', content:'haizara'}
    ]);
  }

}
