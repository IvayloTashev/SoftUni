import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    const { apiUrl } = environment;
    let url = `${apiUrl}/posts`;
    return this.http.get(url);
  }

  getThemes() {
    const { apiUrl } = environment;
    let url = `${apiUrl}/themes`;
    return this.http.get(url);
  }
}
