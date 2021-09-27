import { Component, OnInit, ViewChild } from '@angular/core';
import { DetallesproductosComponent } from '../detallesproductos/detallesproductos.component';
import { ProductosService } from '../services/productos.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
  })
export class BuscadorComponent implements OnInit {

  
  constructor(private productoservice: ProductosService){ }
  posts = []
  
  origenSearch =""
  idSearch =""
  productSearch =""
  enlaceSearch =""

  resultfiltro =[]
  post = null;
  


  beginSearch(event){
    console.log(event)
  
  
  let filter= {

    origen : this.origenSearch,
    Market : this.idSearch,
    product : this.productSearch,
    ID : this.enlaceSearch
 
  }

  this.resultfiltro = this.posts.filter( post => this.isExist(post, filter));
}
  
isExist(post , filter){
let findings = true;

Object.keys(filter).forEach((key) =>{

  const textToSearch = post[key] &&typeof post[key] === "string" && post[key].toLowerCase() || '';
  var res= textToSearch.indexOf(filter[key]) !== -1

  if(res==false){
return findings=false;

  }



})
return findings;

}



  ngOnInit(): void {
    this.productoservice.getAllproductos().subscribe(posts => {

      this.posts = posts.posts;
      console.log(this.posts);
    });

    this.resultfiltro= this.posts;
    this.productoservice.getAllproductos().subscribe(posts => {

      this.posts = posts.posts;
      console.log(this.posts);
    });
  }
  onClick(post){
    console.log("se ha incializado el boton con el valor");
  this.post = post;
  
  }
handlePage(e: PageEvent) {
 this.page_size = e.pageSize
 this.page_number = e.pageIndex + 1


}
  page_size : number = 15
  page_number : number = 1
  pageSizeOptions = [5,10,15]




























}
