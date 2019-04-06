import { Component, Input, OnInit, ɵConsole } from '@angular/core';

import { HackerNewsService } from 'src/app/services/hacker-news.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/pagination.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() totalStoriesArray: any[];
  storyIds: any[];
  urlArray: any[];
  story: any;
  showSpinner: boolean;
  contentArray: any[];
  startArray: any[];

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.totalStoriesArray = [];
    this.getLatestStories();
  }

  /**
   * Pages changed
   * @param: event
   */
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.contentArray = this.totalStoriesArray.slice(startItem, endItem);
    window.scrollTo(0, 0);
  }

  /**
   * Gets story domain
   * @param: story
   * @returns story domain
   */
  getStoryDomain(story: any): string {
    if (!!story.url) {
      this.urlArray = story.url.split('/');
      const domain = this.urlArray[2];
      return domain;
    }

  }

  /**
   * Gets latest stories
   */
  private getLatestStories(): void {
    this.hackerNewsService.getLatestStories().subscribe(
      storyIds => {
        this.storyIds = storyIds;
        this.storyIds.forEach((id, index) => {
          if (index < 50) {
            this.getStory(id);
          }
        });
      },
      (error) => console.log(error)
    );
  }


  /**
   * Gets story
   * @param: id
   */
  private getStory(id: number): void {
    this.hackerNewsService.getStory(id).subscribe(
      story => {
        if (!!story) {
          this.story = story;
          this.totalStoriesArray.push(this.story);
          this.contentArray = this.totalStoriesArray.slice(0, 10);
        }
      },
      (error) => console.log(error)
    );
    this.showSpinner = false;

  }

}
