import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';

const routes: Routes = [
{path:'l',component:ListadoarticulosComponent},
{path:'', component:BuscadorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
