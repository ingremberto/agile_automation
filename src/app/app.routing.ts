import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { PantallasComponent } from './pantallas/pantallas.component';
import { HomeComponent } from './home/home.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { EscenarioComponent } from './escenario/escenario.component';
import { CpComponent } from './cp/cp.component';
import { PasoComponent } from './paso/paso.component';




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

