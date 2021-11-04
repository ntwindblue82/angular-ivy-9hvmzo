import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css'],
})
export class NinjaComponent implements OnInit {
  apiURL = `api/`;
  currency$ = this.get<CurrenyData>(
    'data/CurrencyOverview?league=Scourge&type=Currency&language=ko'
  );
  constructor(private http: HttpClient) {}
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiURL}${url}`);
  }
  ngOnInit() {}

  translation(language: any, typeName: string) {
    return language[typeName];
  }
}
interface CurrenyData {
  lines: Line[];
  language: { translations: {} };
}
interface Line {
  currencyTypeName: string;
  chaosEquivalent: string;
}
