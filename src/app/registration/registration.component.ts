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
  save: boolean = false;
  registrationDetails: any;
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

  saveDetails() {
    this.save = true;
    const data = {
      gender: this.registrationFormGroup.get("gender").value,
      firstName: this.registrationFormGroup.get("firstName").value,
      lastName: this.registrationFormGroup.get("lastName").value,
      dob: this.registrationFormGroup.get("dob").value,
      maritalStatus: this.registrationFormGroup.get("maritalStatus").value,
      pincode: this.registrationFormGroup.get("pincode").value,
      email: this.registrationFormGroup.get("email").value,
    }
    this.registrationDetails = data;
    return data;
  }

  edit() {
    this.save = false;
  }

}
