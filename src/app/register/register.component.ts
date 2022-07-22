import { FormsModule } from '@angular/forms';
import { User } from './../user';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[] = [];
  
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

}
