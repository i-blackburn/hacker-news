import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentModule } from 'ngx-moment';
import { StoryComponent } from './story.component';






describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MomentModule.forRoot()],
      declarations: [StoryComponent],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the domain of story url when getStoryDomain is called', () => {
    const story = { url: 'https://testurl.com/testarticle.html' };
  });

});
