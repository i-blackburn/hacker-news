import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  storyIds: any[];
  story: any;
  storiesArray: any[];

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.storiesArray = [];
    this.getLatestStories();
  }

  private getLatestStories() {
    this.hackerNewsService.getLatestStories().subscribe(
      storyIds => {
        this.storyIds = storyIds;
        this.storyIds.forEach((id, index) => {
          if (index < 100) {
            this.getStory(id);
          }
        });
      }, error => console.log('Something went wrong')
    );
  }

  private getStory(id: number) {
    this.hackerNewsService.getStory(id).subscribe(story => {
      this.story = story;
      this.storiesArray.push(this.story);
      console.log(this.story);
    });
  }
}
