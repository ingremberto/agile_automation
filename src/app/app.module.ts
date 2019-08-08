import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './vistas/proyecto/proyecto.component';
import { UiModule } from './vistas/ui/ui.module';
import { PantallasComponent } from './vistas/pantallas/pantallas.component';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppRoutingModule }        from './app.routing';
import { HomeComponent } from './vistas/home/home.component';
import { ObjetoComponent } from './vistas/objeto/objeto.component';
import { EscenarioComponent } from './vistas/escenario/escenario.component';
import { CpComponent } from './vistas/cp/cp.component';
import { PasoComponent } from './vistas/paso/paso.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SortableModule } from 'ngx-bootstrap/sortable';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    UiModule,
    RouterModule,
    CollapseModule.forRoot(),
    SortableModule.forRoot()

  ],
  declarations: [
    AppComponent,
    ProyectoComponent,
    PantallasComponent,
    HomeComponent,
    ObjetoComponent,
    EscenarioComponent,
    CpComponent,
    PasoComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
