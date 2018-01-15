import { Component, OnInit ,ElementRef} from '@angular/core';
import { Users } from '../../model/users.model';
import { UsersService } from '../../shared/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl ,Validators} from '@angular/forms';




@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {
  users:any;
  user:Users = {
    email: "",
    address:[],
    name: "",
    phone: "",
  }
  contact:FormGroup;
  errorMessage:string;
  constructor(private UsersService:UsersService,
    private route: ActivatedRoute,private router: Router) { }
   
  ngOnInit() {
    /*Valitaion our Form Group */
    this.contact = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email': new FormControl(null , [Validators.required , Validators.email]),
      'street': new FormControl(null , Validators.required),
      'suite': new FormControl(null , Validators.required),
      'city': new FormControl(null, Validators.required),
      'id': new FormControl(null , Validators.required),
      'phone': new FormControl(null, Validators.required),
    }); 
    
    console.log(this.contact);
    /*Get users service*/ 
     this.UsersService.getUser()
      .subscribe(
        users =>this.users = users,
        error => this.errorMessage = <any>error);
  }
  showUserDetails(user){
    this.router.navigate(['/users', user.id ]);
  }
  onSubmit() {
    this.UsersService.addUser(this.user).subscribe(user=>{
    this.users.push(this.user);
    })
  }

}
