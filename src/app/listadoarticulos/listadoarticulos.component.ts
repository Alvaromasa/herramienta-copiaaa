import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.css']
})
export class ListadoarticulosComponent implements OnInit {

posts = [];

  constructor(private productoservice: ProductosService) { }
  
  

  ngOnInit(): void { this.productoservice.getAllproductos().subscribe(posts => {

    this.posts = posts.posts;
    console.log(this.posts);
  });
  
  
  
  }

 
   

  
    

}
