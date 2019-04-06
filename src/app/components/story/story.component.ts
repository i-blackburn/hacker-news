import { Component, Input, OnInit } from '@angular/core';

import { HackerNewsService } from 'src/app/services/hacker-news.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() storiesArray: any[];
  storyIds: any[];
  urlArray: any[];
  story: any;
  showSpinner: boolean;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.storiesArray = [];
    this.getLatestStories();
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
          if (index < 30) {
            this.getStory(id);
          }
        });
      },
      error => console.log(error)
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
          this.storiesArray.push(this.story);
        }
      },
      error => console.log(error)
    );
    this.showSpinner = false;

  }

}
