import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manifest } from '../mock-data';
import { Freight } from '../freight';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  params: {}
};

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(private http: HttpClient) {
  }

  getGroupsByRole(token: any): Observable<Freight[]> {
    options.params = new HttpParams().set('item', 'json stringify this jwt for transport'/*this.jwtFromSomeWhere*/)
    return this.http.get<Freight[]>('/getGroupsByRole', options);
  }
}
