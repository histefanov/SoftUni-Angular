import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Theme } from './models';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private httpClient: HttpClient;
  private themesUrl = 'http://localhost:3000/api/themes';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllThemes(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(this.themesUrl);
  }
}
