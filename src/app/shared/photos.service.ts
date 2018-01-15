import { Injectable } from '@angular/core';
import {  HttpClient  , HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Photos } from '../model/photos.model';
@Injectable()
export class PhotosService {
    // here the photos request service
    private PhotosUrl = 'https://jsonplaceholder.typicode.com/photos';
    constructor(private http: HttpClient) { }
      
     getPhotos(): Observable<Photos[]> {
      return this.http.get<Photos[]>(this.PhotosUrl) 
      .catch(this.handleError);                   
    }

      private handleError(err:HttpErrorResponse){
      console.log(err.message);
      return Observable.throw(err.message);
    }
    // here I assing every albumId to their photos 
    getPhotosByAlbumsId(id:string): Observable<Photos[]> {{
        return this.getPhotos() 
        .map(photos => photos.filter(photo => photo.albumId === +id));
        }   
    }
}

