import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() storiesArray: number;
  story: any;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() { }

}
