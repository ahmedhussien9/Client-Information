import { Injectable } from '@angular/core';
import {  HttpClient  , HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { UserAlbums } from '../model/userAlbums.mode';

@Injectable()
export class AlbumsService {
  private usersAlbums = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

    getAlubms(): Observable<UserAlbums[]> {
    return this.http.get<UserAlbums[]>(this.usersAlbums)
                .catch(this.handleError);                   
    }

    private handleError(err:HttpErrorResponse){
      console.log(err.message);
      return Observable.throw(err.message);
    }
    
    getAlubmsByUserId(id:string): Observable<UserAlbums[]> {
      return this.getAlubms() 
      .map(albums => albums.filter(album => album.userId === +id));
      
      }   
}
