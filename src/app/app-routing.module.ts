//importar los modulos dek router de angular
import { ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { ColeccionesMenuComponent } from "./components/colecciones-menu/colecciones-menu.component";
import { Error404Component } from "./components/error404/error404.component";

// importar componentes que combetire en paginas

import { HomeComponent } from './components/home/home.component';
import { MenuAlumadComponent } from "./components/menu-alumad/menu-alumad.component";
import { MenuBancosComponent } from "./components/menu-bancos/menu-bancos.component";
import { MenuBanquetasComponent } from "./components/menu-banquetas/menu-banquetas.component";
import { MenuBarrasComponent } from "./components/menu-barras/menu-barras.component";
import { MenuBeltComponent } from "./components/menu-belt/menu-belt.component";
import { MenuCamastrosComponent } from "./components/menu-camastros/menu-camastros.component";
import { MenuDeckComponent } from "./components/menu-deck/menu-deck.component";
import { MenuDotComponent } from "./components/menu-dot/menu-dot.component";
import { MenuEspecialComponent } from "./components/menu-especial/menu-especial.component";
import { MenuFormenteraComponent } from "./components/menu-formentera/menu-formentera.component";
import { MenuHamacasComponent } from "./components/menu-hamacas/menu-hamacas.component";
import { MenuMaterialesAluminioComponent } from "./components/menu-materiales-aluminio/menu-materiales-aluminio.component";
import { MenuMaterialesPhifertexComponent } from "./components/menu-materiales-phifertex/menu-materiales-phifertex.component";
import { MenuMaterialesSunbrellaComponent } from "./components/menu-materiales-sunbrella/menu-materiales-sunbrella.component";
import { MenuMaterialesComponent } from "./components/menu-materiales/menu-materiales.component";
import { MenuMesasComponent } from "./components/menu-mesas/menu-mesas.component";
import { MenuModenaComponent } from "./components/menu-modena/menu-modena.component";
import { MenuPergolasComponent } from "./components/menu-pergolas/menu-pergolas.component";
import { MenuPuffsComponent } from "./components/menu-puffs/menu-puffs.component";
import { MenuReposerasComponent } from "./components/menu-reposeras/menu-reposeras.component";
import { MenuSillasComponent } from "./components/menu-sillas/menu-sillas.component";
import { MenuSillonesComponent } from "./components/menu-sillones/menu-sillones.component";
import { MenuTirrenoComponent } from "./components/menu-tirreno/menu-tirreno.component";
import { MuebleComponent } from "./components/mueble/mueble.component";
import { MueblesPageComponent } from "./components/muebles-page/muebles-page.component";
import { ProductosMenuComponent } from "./components/productos-menu/productos-menu.component";
import { MenuMaterialesDeckComponent } from "./components/menu-materiales-deck/menu-materiales-deck.component";
import { MenuMaterialesFenolicoComponent } from "./components/menu-materiales-fenolico/menu-materiales-fenolico.component";
import { MenuMaterialesSilvertexComponent } from "./components/menu-materiales-silvertex/menu-materiales-silvertex.component";
import { MenuMaterialesCoversolComponent } from "./components/menu-materiales-coversol/menu-materiales-coversol.component";
// array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'productos', component: ProductosMenuComponent},
    {path: 'colecciones', component: ColeccionesMenuComponent},
    {path: 'productos/Sillones', component: MenuSillonesComponent},
    {path: 'productos/Mesas', component: MenuMesasComponent},
    {path: 'productos/Puffs', component: MenuPuffsComponent},
    {path: 'productos/Reposeras', component: MenuReposerasComponent},
    {path: 'productos/Camastros', component: MenuCamastrosComponent},
    {path: 'productos/Barras', component: MenuBarrasComponent},
    {path: 'productos/Banquetas', component: MenuBanquetasComponent},
    {path: 'productos/Bancos', component: MenuBancosComponent},
    {path: 'productos/Sillas', component: MenuSillasComponent},
    {path: 'productos/Hamacas', component: MenuHamacasComponent},
    {path: 'productos/Pergolas', component: MenuPergolasComponent},
    {path: 'colecciones/Formentera', component: MenuFormenteraComponent},
    {path: 'colecciones/Modena', component: MenuModenaComponent},
    {path: 'colecciones/Tirreno', component: MenuTirrenoComponent},
    {path: 'colecciones/Alumad', component: MenuAlumadComponent},
    {path: 'colecciones/Deck', component: MenuDeckComponent}, 
    {path: 'colecciones/Dot', component: MenuDotComponent},
    {path: 'colecciones/Belt', component: MenuBeltComponent},
    {path: 'colecciones/Especial', component: MenuEspecialComponent},
    {path: 'materiales', component: MenuMaterialesComponent},
    {path: 'materiales/Aluminio', component: MenuMaterialesAluminioComponent},
    {path: 'materiales/Sunbrella', component: MenuMaterialesSunbrellaComponent},
    {path: 'materiales/Phifertex', component: MenuMaterialesPhifertexComponent},
    {path: 'materiales/Deck', component: MenuMaterialesDeckComponent},
    {path: 'materiales/Fenolico', component: MenuMaterialesFenolicoComponent},
    {path: 'materiales/Silvertex', component: MenuMaterialesSilvertexComponent},
    {path: 'materiales/Coversol', component: MenuMaterialesCoversolComponent},
    {path: 'productos/Sillones/:idmuebles', component: MueblesPageComponent},
    {path: 'productos/Mesas/:idmuebles', component: MueblesPageComponent},
    {path: 'productos/Puffs/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Reposeras/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Camastros/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Barras/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Banquetas/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Bancos/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Sillas/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Hamacas/:idmuebles', component:  MueblesPageComponent},
    {path: 'productos/Pergolas/:idmuebles', component:  MueblesPageComponent},
    {path: 'colecciones/Formentera/:idmuebles', component:  MueblesPageComponent},
    {path: 'colecciones/Modena/:idmuebles', component:  MueblesPageComponent},
    {path: 'colecciones/Tirreno/:idmuebles', component:  MueblesPageComponent},
    {path: 'colecciones/Alumad/:idmuebles', component:  MueblesPageComponent},
    {path: 'colecciones/Deck/:idmuebles', component:  MueblesPageComponent}, 
    {path: 'colecciones/Dot/:idmuebles', component:  MueblesPageComponent},
    {path: 'colecciones/Belt/:idmuebles', component:  MueblesPageComponent},
    {path: 'colecciones/Especial/:idmuebles', component:  MueblesPageComponent},
    {path: '**', component: Error404Component},
]

// exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);   