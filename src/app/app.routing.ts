import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from './vistas/proyecto/proyecto.component';
import { PantallasComponent } from './vistas/pantallas/pantallas.component';
import { HomeComponent } from './vistas/home/home.component';
import { ObjetoComponent } from './vistas/objeto/objeto.component';
import { EscenarioComponent } from './vistas/escenario/escenario.component';
import { CpComponent } from './vistas/cp/cp.component';
import { PasoComponent } from './vistas/paso/paso.component';




  const appRoutes: Routes = [
        { path: 'proyecto', component: ProyectoComponent},
        { path: 'pantallas', component: PantallasComponent},
        { path: 'home', component: HomeComponent},
        { path: 'objeto', component: ObjetoComponent},
        { path: 'escenario', component: EscenarioComponent},
        { path: 'cp', component: CpComponent},
        { path: 'paso', component: PasoComponent},
    ///    { path: '',   redirectTo: '/home', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }

