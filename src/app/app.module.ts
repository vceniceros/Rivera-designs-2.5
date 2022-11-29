import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormGroup, FormGroupDirective, ReactiveFormsModule,FormsModule }   from '@angular/forms';
import { routing, appRoutingProviders } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalSliderComponent } from './components/principal-slider/principal-slider.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { HomeComponent } from './components/home/home.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { PrestationsSectionComponent } from './components/prestations-section/prestations-section.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosMenuComponent } from './components/productos-menu/productos-menu.component';
import { ColeccionesMenuComponent } from './components/colecciones-menu/colecciones-menu.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { MenuSillonesComponent } from './components/menu-sillones/menu-sillones.component';
import { MenuMueblesComponent } from './components/menu-muebles/menu-muebles.component';
import { MenuMesasComponent } from './components/menu-mesas/menu-mesas.component';
import { MenuPuffsComponent } from './components/menu-puffs/menu-puffs.component';
import { MenuReposerasComponent } from './components/menu-reposeras/menu-reposeras.component';
import { MenuCamastrosComponent } from './components/menu-camastros/menu-camastros.component';
import { MenuBarrasComponent } from './components/menu-barras/menu-barras.component';
import { MenuBanquetasComponent } from './components/menu-banquetas/menu-banquetas.component';
import { MenuBancosComponent } from './components/menu-bancos/menu-bancos.component';
import { MenuSillasComponent } from './components/menu-sillas/menu-sillas.component';
import { MenuHamacasComponent } from './components/menu-hamacas/menu-hamacas.component';
import { MenuPergolasComponent } from './components/menu-pergolas/menu-pergolas.component';
import { MenuFormenteraComponent } from './components/menu-formentera/menu-formentera.component';
import { MenuModenaComponent } from './components/menu-modena/menu-modena.component';
import { MenuTirrenoComponent } from './components/menu-tirreno/menu-tirreno.component';
import { MenuAlumadComponent } from './components/menu-alumad/menu-alumad.component';
import { MenuDeckComponent } from './components/menu-deck/menu-deck.component';
import { MenuDotComponent } from './components/menu-dot/menu-dot.component';
import { MenuBeltComponent } from './components/menu-belt/menu-belt.component';
import { MenuEspecialComponent } from './components/menu-especial/menu-especial.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Error404Component } from './components/error404/error404.component';
import { MuebleComponent } from './components/mueble/mueble.component';
import { MuebleService } from './services/mueblesService';
import { MueblesPageComponent } from './components/muebles-page/muebles-page.component';
import { MueblesSliderComponent } from './components/muebles-slider/muebles-slider.component';
import { MueblesContactComponent } from './components/muebles-contact/muebles-contact.component';
import { ColeccionSliderComponent } from './components/coleccion-slider/coleccion-slider.component';
import { EmailService } from './services/email.service';
import { MenuMaterialesComponent } from './components/menu-materiales/menu-materiales.component';
import { MenuMaterialesAluminioComponent } from './components/menu-materiales-aluminio/menu-materiales-aluminio.component';
import { MenuMaterialesPhifertexComponent } from './components/menu-materiales-phifertex/menu-materiales-phifertex.component';
import { MenuMaterialesSunbrellaComponent } from './components/menu-materiales-sunbrella/menu-materiales-sunbrella.component';
import { MuebleServiceLocalService } from './services/mueble-service-local.service';
import { MaterialSliderAluminioComponent } from './components/material-slider-aluminio/material-slider-aluminio.component';
import { MaterialAluminioOthersComponent } from './components/material-aluminio-others/material-aluminio-others.component';
import { MaterialAluminioManteinmentComponent } from './components/material-aluminio-manteinment/material-aluminio-manteinment.component';
import { MaterialSliderSunbrellaComponent } from './components/material-slider-sunbrella/material-slider-sunbrella.component';
import { MaterialSunbrellaOthersComponent } from './components/material-sunbrella-others/material-sunbrella-others.component';
import { MaterialSunbrellaManteinmentComponent } from './components/material-sunbrella-manteinment/material-sunbrella-manteinment.component';
import { MaterialSliderPhifertexComponent } from './components/material-slider-phifertex/material-slider-phifertex.component';
import { MaterialPhifertexOthersComponent } from './components/material-phifertex-others/material-phifertex-others.component';
import { MaterialPhifertexManteinmentComponent } from './components/material-phifertex-manteinment/material-phifertex-manteinment.component';
import { MenuMaterialesDeckComponent } from './components/menu-materiales-deck/menu-materiales-deck.component';
import { MenuMaterialesFenolicoComponent } from './components/menu-materiales-fenolico/menu-materiales-fenolico.component';
import { MenuMaterialesSilvertexComponent } from './components/menu-materiales-silvertex/menu-materiales-silvertex.component';
import { MenuMaterialesCoversolComponent } from './components/menu-materiales-coversol/menu-materiales-coversol.component';
import { MaterialSliderDeckComponent } from './components/material-slider-deck/material-slider-deck.component';
import { MaterialSliderFenolicoComponent } from './components/material-slider-fenolico/material-slider-fenolico.component';
import { MaterialSliderSilvertexComponent } from './components/material-slider-silvertex/material-slider-silvertex.component';
import { MaterialSliderCoversolComponent } from './components/material-slider-coversol/material-slider-coversol.component';
import { MaterialDeckOthersComponent } from './components/material-deck-others/material-deck-others.component';
import { MaterialFenolicoOthersComponent } from './components/material-fenolico-others/material-fenolico-others.component';
import { MaterialSilvertexOthersComponent } from './components/material-silvertex-others/material-silvertex-others.component';
import { MaterialCoversolOthersComponent } from './components/material-coversol-others/material-coversol-others.component';
import { MaterialDeckManteinmentComponent } from './components/material-deck-manteinment/material-deck-manteinment.component';
import { MaterialFenolicoManteinmentComponent } from './components/material-fenolico-manteinment/material-fenolico-manteinment.component';
import { MaterialSilvertexManteinmentComponent } from './components/material-silvertex-manteinment/material-silvertex-manteinment.component';
import { MaterialCoversolManteinmentComponent } from './components/material-coversol-manteinment/material-coversol-manteinment.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PrincipalSliderComponent,
    WhatsappButtonComponent,
    HomeComponent,
    TitleSectionComponent,
    CategoriesSectionComponent,
    PrestationsSectionComponent,
    ProductosComponent,
    ProductosMenuComponent,
    ColeccionesMenuComponent,
    ColeccionesComponent,
    MenuSillonesComponent,
    MenuMueblesComponent,
    MenuMesasComponent,
    MenuPuffsComponent,
    MenuReposerasComponent,
    MenuCamastrosComponent,
    MenuBarrasComponent,
    MenuBanquetasComponent,
    MenuBancosComponent,
    MenuSillasComponent,
    MenuHamacasComponent,
    MenuPergolasComponent,
    MenuFormenteraComponent,
    MenuModenaComponent,
    MenuTirrenoComponent,
    MenuAlumadComponent,
    MenuDeckComponent,
    MenuDotComponent,
    MenuBeltComponent,
    MenuEspecialComponent,
    FilterPipe,
    Error404Component,
    MuebleComponent,
    MueblesPageComponent,
    MueblesSliderComponent,
    MueblesContactComponent,
    ColeccionSliderComponent,
    MenuMaterialesComponent,
    MenuMaterialesAluminioComponent,
    MenuMaterialesPhifertexComponent,
    MenuMaterialesSunbrellaComponent,
    MaterialSliderAluminioComponent,
    MaterialAluminioOthersComponent,
    MaterialAluminioManteinmentComponent,
    MaterialSliderSunbrellaComponent,
    MaterialSunbrellaOthersComponent,
    MaterialSunbrellaManteinmentComponent,
    MaterialSliderPhifertexComponent,
    MaterialPhifertexOthersComponent,
    MaterialPhifertexManteinmentComponent,
    MenuMaterialesDeckComponent,
    MenuMaterialesFenolicoComponent,
    MenuMaterialesSilvertexComponent,
    MenuMaterialesCoversolComponent,
    MaterialSliderDeckComponent,
    MaterialSliderFenolicoComponent,
    MaterialSliderSilvertexComponent,
    MaterialSliderCoversolComponent,
    MaterialDeckOthersComponent,
    MaterialFenolicoOthersComponent,
    MaterialSilvertexOthersComponent,
    MaterialCoversolOthersComponent,
    MaterialDeckManteinmentComponent,
    MaterialFenolicoManteinmentComponent,
    MaterialSilvertexManteinmentComponent,
    MaterialCoversolManteinmentComponent,
  
  ],
  imports: [
    BrowserModule, 
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    MuebleService,
    EmailService,
    ReactiveFormsModule,
    MuebleServiceLocalService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
