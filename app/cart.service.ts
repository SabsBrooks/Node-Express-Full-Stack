import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  getAllItems(): Observable<any> {
    return this.http.get(`http://localhost:5000/shoppingcart`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post("http://localhost:5000/shoppingcart", item);
  }

  removeItem(id): Observable<any> {
    return this.http.delete(`http://localhost:5000/shoppingcart/${id}`);
  }

  updateItem(item: any): Observable<any> {
    return this.http.put(`http://localhost:5000/shoppingcart/${item.id}`, item);
  }

  constructor(private http: HttpClient) {}
}


