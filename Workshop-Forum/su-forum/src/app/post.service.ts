import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private httpClient: HttpClient;
  private postsUrl = 'https://localhost:3000/api/posts?limit=5';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getFiveMostRecentPosts() {
    return this.httpClient.get(this.postsUrl);
  }
}
