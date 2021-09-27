import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { DetallesproductosComponent } from './detallesproductos/detallesproductos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { PaginationPipe } from './pipes/pagination.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ListadoarticulosComponent,
    MenuprincipalComponent,
    BuscadorComponent,
    DetallesproductosComponent,
    PaginationPipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
