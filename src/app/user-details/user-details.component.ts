import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import 'rxjs/add/operator/switchMap';
import { UsersService } from '../shared/users.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { UserAlbums } from '../model/userAlbums.mode';
import { AlbumsService } from '../shared/albums.service';
import { PhotosService } from '../shared/photos.service';
import { Photos } from '../model/photos.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public userId:string;

  User_Albums:UserAlbums[];
  photoAlbums:Photos[];
  displayUsers;
  
  errorMessage:string;
  constructor(
    private activeRoute: ActivatedRoute, 
    private router: Router,
    private location: Location, 
    private usersDetails: UsersService,
    private userAlbums:AlbumsService,
    private photos:PhotosService) {}
 
  ngOnInit() { 
    this.activeRoute.params.forEach((urlParameters) => {
    this.userId = urlParameters['id']; });

    this.displayUsers = this.usersDetails.getUserId(this.userId);
    this.userAlbums.getAlubmsByUserId(this.userId).subscribe(albums=>this.User_Albums=albums);
    }

    goBack():void{
      this.location.back();
    }
    getPhoto(albumId:string){
      this.photos.getPhotosByAlbumsId(albumId).subscribe(photos => this.photoAlbums= photos);
     }
    



}
