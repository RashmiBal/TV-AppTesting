import {Observable, of} from 'rxjs';
import {Itvshowservice} from './tvshow.service';
import {IFavoriteShow} from './../ifavorite-show';

export class TvshowServiceFake implements Itvshowservice{
    private fake:IFavoriteShow[] = [{
        name: '1',
        summary: 'string',
        runtime: 1,
        officialSite: 'string',
        url: 'string',
        language: 'string',
        genres: 'string',
        schedule: 'string',
        days: 'string',
        image: 'string' 
    },{
        name: '2',
        summary: 'string',
        runtime: 1,
        officialSite: 'string',
        url: 'string',
        language: 'string',
        genres: 'string',
        schedule: 'string',
        days: 'string',
        image: 'string'
    }];

    public getTVShowsearchlist(userSearchText: string | number) : Observable<IFavoriteShow[]>{
        return of(this.fake);
    }

}
