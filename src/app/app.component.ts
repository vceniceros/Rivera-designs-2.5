import { Component,OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rivera Designs / muebles de aluminio de alta calidad';
  constructor(private titleService: Title, private metaService: Meta){}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'muebles,aluminio,Phifertex,Sunbrella,elegancia,estilo,argentina,exteriores,interiores,sillones,mesas,bancos,banqueta,hamacas,pérgolas,sillas,barras,camastros,puffs,reposeras'},
      {name: 'description', content: 'En Rivera Desings nos dedicamos a vender muebles de aluminio de alta calidad para exteriores e interiores, resistentes al agua, el oxido y con un estilo y diseño elegantes.'},
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content:'haizara'}
    ]);
  }
  
}
