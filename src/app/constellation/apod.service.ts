import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Apod } from '../shared/models/apod.model';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private url = 'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&';

  constructor(private _http: HttpClient) { }

  private subtractDays(days: number) {
    let date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  }

  private transformDate(date = new Date()) {
    let dateFull = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()-1}`;
    return String(dateFull);
  }


  getApod(days: number = 5): Observable<any> {
    let start_date = this.subtractDays(days);
    const options = { params: new HttpParams({ fromString: `start_date=${this.transformDate(start_date)}&end_date=${this.transformDate()}` }) };
    return this._http.get(this.url, options)
      .pipe(
        catchError(() => {
          console.log('error en el servicio get');
          return of([]);
        }))

  }



}
