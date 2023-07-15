import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../models/Users';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private validUsers: NoteService, private route: Router) { }

  Users: Users[] = [];
  submitStatus?: boolean;
  valid: any;

  ngOnInit(): void {
    this.validUsers.CanLogIn = false;
    this.validUsers.getUser().subscribe({
      next: (users) => {
        this.Users = users;

      }
    })
  }

  loginForm = this.fb.group({
    "email": ['', [Validators.required, Validators.email]],
    "password": ['', Validators.required]
  })

  get email() { return this.loginForm.get("email") }

  get password() { return this.loginForm.get("password") }

  login() {
    this.valid = this.Users.filter((detail) => detail.email == this.loginForm.get("email")?.value && detail.password == this.loginForm.get("password")?.value)

    if (this.valid.length != 0) {
      this.validUsers.CanLogIn = true;
    }
    else {
      this.validUsers.CanLogIn = false;
    }
    this.route.navigate(['/dashboard']);
  }
}
