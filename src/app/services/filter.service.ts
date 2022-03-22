import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filters } from '../database/filter_response';
import { countries } from '../database/countries_response';
import { Filter } from '../Models/Filter';
import { Country } from '../Models/Country';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) { }

  getFilters(): Filter[] {
    return filters;
  }

  getCountriesApi(api: string): Observable<Country[]> {
    return this.http.get<Country[]>(api);
  }

  getCountries(api: string): Country[] {
    return countries;
  }
}
