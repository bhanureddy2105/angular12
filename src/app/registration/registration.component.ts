import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isLoading: boolean = false;
  registrationFormGroup = new FormGroup({
    gender: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z \-']+")]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z \-']+")]),
    dob: new FormControl('', [Validators.required]),
    maritalStatus: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  maritalStatus = ["married", "unmarried"];
  startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit(): void {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
