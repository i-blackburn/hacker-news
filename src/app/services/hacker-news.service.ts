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


  /**
   * Gets latest stories
   * @returns latest stories
   */
  getLatestStories(): Observable<any> {
    return this.http
      .get(this.url + '/newstories.json')
      .pipe(map(response => response));
  }

  /**
   * Gets story
   * @param: id
   * @returns story
   */
  getStory(id: number): Observable<any> {
    return this.http
      .get(this.url + '/item/' + id + '.json?print=pretty')
      .pipe(map(response => response));
  }
}
