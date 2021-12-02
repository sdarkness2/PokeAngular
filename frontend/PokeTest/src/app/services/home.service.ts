import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = "http://localhost:3000/blog"

  constructor(private http: HttpClient) { }

  read(): Observable<Blog[]>{
    return this.http.get<Blog[]>(this.baseUrl)
  }
}
