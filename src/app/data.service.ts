import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Product, Book, DelBook, Login} from './product';

@Injectable()
export class DataService {
  
  private isUserLoggedIn;
  private username='';
  private password='';
  books:Array<any>;
  result1;
  constructor(private http:Http) { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(prod: Login) {
  console.log(prod);
    this.username=prod.username;
    this.password=prod.password;
    this.isUserLoggedIn= true;
    return this.http.post("/api/checklogin",prod) .map(result => this.result1 = result.json());
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }
  getUserName(){
    return this.username;
  }
  getUserbooks(){
    console.log("username="+this.username);
     return this.http.get("/api/getbooks/"+this.username)
     .map(result => this.books = result.json());
    }
  postDataadd(prod: Product) {
  console.log('Add  Product');
  console.log(prod);
  return this.http.post("/api/adduser",prod).subscribe();
  }
  postbookData(prod: Book){
    console.log('Add  Product');
    console.log(prod);
    return this.http.post("/api/addbook",prod)
    .map(result => this.books = result.json());
  }
  deletebook(prod:DelBook){
    return this.http.post("/api/deletebook",prod).subscribe();
  }
  logout(){
    this.isUserLoggedIn= false;
  }
}
