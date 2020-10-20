import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  usersList: User[];

  constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe(value => this.usersList = value)
  }

  ngOnInit(): void {
  }

}
