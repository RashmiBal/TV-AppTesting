import {Observable, of} from 'rxjs';
import {Itvshowservice} from './tvshow.service';
import {IFavoriteShow} from './../ifavorite-show';

export class TvshowServiceFake implements Itvshowservice{
    private fake:IFavoriteShow[] = [{
        name: 'name1',
        summary: 'summary1',
        runtime: 1,
        officialSite: 'officialSite1',
        url: 'url1',
        language: 'language1',
        genres: 'genres1',
        schedule: 'schedule1',
        days: 'days1',
        image: 'image1' 
    },{
        name: 'name2',
        summary: 'summary2',
        runtime: 2,
        officialSite: 'officialSite2',
        url: 'url2',
        language: 'language2',
        genres: 'genres2',
        schedule: 'schedule2',
        days: 'days2',
        image: 'image2' 
    }];

    public getTVShowsearchlist(userSearchText: string | number) : Observable<IFavoriteShow[]>{
        return of(this.fake);
    }

}
