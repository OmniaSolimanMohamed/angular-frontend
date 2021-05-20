import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myService:ProductsService) { }
  products: any;
  ngOnInit(): void {
    this.myService.getAllProducts().subscribe(
      (res: any)=>{this.products = res},
      (err: any)=>{console.log(err)}
    );
  }
}
