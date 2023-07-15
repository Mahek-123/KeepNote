import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private newuser: NoteService, private route: Router) { }

  submitStatus?: boolean;

  ngOnInit() {
    this.submitStatus = false;
  }

  Registration = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/), this.mustMatchValidator]],
    confirmPassword: ['', [Validators.required]],
    gender: [''],
    age: ['', [Validators.required, this.checkAge]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zipCode: ['', this.zipCodeLength]
    })
  }, { validators: [this.mustMatchValidator] })

  get firstName() { return this.Registration.get("firstName") }

  get lastName() { return this.Registration.get("lastName") }

  get email() { return this.Registration.get("email") }

  get password() { return this.Registration.get("password") }

  get confirmPassword() { return this.Registration.get("confirmPassword") }

  get gender() { return this.Registration.get("gender") }

  get age() { return this.Registration.get("age") }

  get phoneNumber() { return this.Registration.get("phoneNumber") }

  get street() { return this.Registration.get("address")?.get("street") }

  get city() { return this.Registration.get("address")?.get("city") }

  get state() { return this.Registration.get("address")?.get("state") }

  get zipCode() { return this.Registration?.get("address")?.get("zipCode") }


  OnSubmit() {
    this.submitStatus = true;
    this.newuser.addUser(this.Registration.value).subscribe((result) => {
      console.log(result)
    });

    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.route.navigate([""]);
  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;

    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {

      return { mustMatch: false }
    }
    return null;
  }

  checkAge(fg: AbstractControl) {
    const age = fg.value;
    if (age < 18) {
      return { checkAge: false }
    }
    return null;
  }

  zipCodeLength(fg: AbstractControl) {
    const code = fg.value;
    if (code < 9999 || code > 99999) {
      return { zipCodeLength: false }
    }
    return null;
  }

  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm("Are you sure you want to leave without Registering?");
    }
    return this.submitStatus;
  }
}