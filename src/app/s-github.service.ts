import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SGithubService {
  private token = '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'
  private url = 'https://api.github.com/users'
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url);
  }
}
