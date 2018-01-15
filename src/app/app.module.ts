import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ListOfUsersComponent } from './users-list/list-of-users/list-of-users.component';
import { UsersService } from './shared/users.service';
import {Users} from './model/users.model';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule ,Router } from '@angular/router';
import { AlbumsService } from './shared/albums.service';
import { PhotosService } from './shared/photos.service';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ListOfUsersComponent,
    UserDetailsComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component : WelcomepageComponent},
      {path: 'users', component : UsersListComponent},
      {path : 'users/:id' , component: UserDetailsComponent },
    ])
  ],
  providers: [UsersService,AlbumsService,PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
