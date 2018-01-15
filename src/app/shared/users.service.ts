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
import { Users } from '../model/users.model';
import {Headers, RequestOptions} from '@angular/http';


@Injectable()
export class UsersService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private usersAlbums = 'https://jsonplaceholder.typicode.com/albums'; 

    constructor (private http: HttpClient ) {}
  
 getUser() {
   return this.http.get<Users[]>(this.usersUrl)
              .catch(this.handleError);                   
 }
    private handleError(err:HttpErrorResponse){
      console.log(err.message);
      return Observable.throw(err.message);
    }


    getUserId(id: number | string) : Observable<Users>{
      return this.getUser()
        .map(users => users.find(user => user.id === + id));
        
    }
  
    addUser(user) {
        return this.http.post('http://jsonplaceholder.typicode.com/users', user);
}


}