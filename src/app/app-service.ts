import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    url = "http://localhost:4503"

  // injetando o HttpClient
    constructor(private http: HttpClient) { }

    getUser(valor: string): Observable<any> {
        return this.http.get(this.url + valor)
    }

}