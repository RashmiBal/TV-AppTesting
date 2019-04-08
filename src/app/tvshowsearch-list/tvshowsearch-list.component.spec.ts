import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TvshowsearchListComponent } from './tvshowsearch-list.component';
import { TvshowService } from '../tvshow/tvshow.service';
import { TvshowServiceFake } from '../tvshow/tvshow.service.fake';

describe('TvshowsearchListComponent', () => {
  let component: TvshowsearchListComponent;
  let fixture: ComponentFixture<TvshowsearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsearchListComponent ],
      providers:[TvshowServiceFake],
      //providers:[{provide: TvshowService, useClass: TvshowServiceFake}], // KAL showed this in class but this did not work, keeping it to clarify
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should call the service and populate data', 
    inject([TvshowServiceFake],(service:TvshowServiceFake) => {
      expect(component).toBeTruthy();
      service.getTVShowsearchlist('name1').subscribe(data => {
        debugger;
        expect(data[0].name).toBe('name1');
        expect(data[0].summary).toBe('summary1');
        expect(data[0].officialSite).toBe('officialSite1');
        expect(data[0].language).toBe('language1');
        expect(data[0].runtime).toBe(1);
        expect(data[0].schedule).toBe('schedule1');
        expect(data[0].url).toBe('url1');
        expect(data[0].genres).toBe('genres1');
        expect(data[0].days).toBe('days1');
        expect(data[0].image).toBe('image1');
      });
    }));
  
});
