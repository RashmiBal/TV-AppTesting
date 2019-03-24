import { Component } from '@angular/core';
import { IFavoriteShow } from './ifavorite-show';
import { TvshowService } from './tvshow/tvshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVshow';

  // currentShow: IFavoriteShow | undefined; // *IMP* Single data code kept for reference
  showsArray:Array<IFavoriteShow>;

  constructor(private tvshowService:TvshowService) {
  }

  doSearch(searchValue) {

  console.log("searching for "+searchValue);

    const userInput = searchValue.split(',').map(s => s.trim());
    this.tvshowService.getTVShowsearchlist(userInput[0])
    // .subscribe(data => this.currentShow = data); // *IMP* Single data code kept for reference
    .subscribe(data => this.showsArray = data);
  }
}
