import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://hacker-news.firebaseio.com/v0';
  }
  getLatestStories(): Observable<any> {
    return this.http
      .get(this.url + '/newstories.json')
      .pipe(map(response => response));
  }

  getStory(id: number): Observable<any> {
    return this.http
      .get(this.url + '/item/' + id + '.json?print=pretty')
      .pipe(map(response => response));
  }
}
