import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Countryinfo } from '../menumodel/countryinfo.model';
import { Observable } from 'rxjs';

const menuHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private mGetMenuUrl = 'http://localhost:8080/api/getMenuCountryWise';
  private mAddEditMenuUrl = 'http://localhost:8080/api/addSubMenus';

  constructor(private http: HttpClient) { }

  getMenus(countryInfo: Countryinfo): Observable<Countryinfo> {
    return this.http.post<Countryinfo>(this.mGetMenuUrl, countryInfo, menuHttpOptions);
  }

  addEditMenus(countryInfo: Countryinfo): Observable<Countryinfo> {
    return this.http.post<Countryinfo>(this.mAddEditMenuUrl, countryInfo, menuHttpOptions);
  }

}
