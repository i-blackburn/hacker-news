import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';

import { MomentModule } from 'ngx-moment';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StoryComponent } from './components/story/story.component';




describe('AppComponent', () => {
  let app: any;
  let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MomentModule.forRoot()],
      declarations: [
        AppComponent,
        HeaderComponent,
        StoryComponent,
        FooterComponent
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

});
