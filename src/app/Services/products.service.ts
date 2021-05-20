import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myClient: HttpClient) { }

  // BaseURL= "http://localhost:3000/products"
  BaseURL= "http://localhost:1337/products"
  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxNTI1MTE5LCJleHAiOjE2MjQxMTcxMTl9.xhI2rL40FJY2FPON6rrAHP8Kn4nHSDYgnumhEK-T4eY"
  token = `Bearer ${localStorage.getItem("token")}`
  
  getAllProducts()
  {
    let header = new HttpHeaders().set(
      "Authorization",
      this.token
    );
    return this.myClient.get(this.BaseURL,{headers:header});
  }
  getProductById(id: number)
  {
    return this.myClient.get(this.BaseURL+'/'+id);
  }
}
