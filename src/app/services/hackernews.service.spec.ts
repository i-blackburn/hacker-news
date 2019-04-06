import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HackerNewsService } from './hacker-news.service';


describe('HackernewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: HackerNewsService = TestBed.get(HackerNewsService);
    expect(service).toBeTruthy();
  });

  it('getLatestStories should return value from observable', () => {
    const service: HackerNewsService = TestBed.get(HackerNewsService);
    service.getLatestStories().subscribe(value => {
      expect(value).toBe('Observable Value');
    });
  });

  it('getStory should return value from observable', () => {
    const service: HackerNewsService = TestBed.get(HackerNewsService);
    service.getStory(12345).subscribe(value => {
      expect(value).toBe('Observable Value');
    });
  });
});
