import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  personalDetail = 1;
  bankDetail = 2;
  professionalDetail = 3;
  educationDetail = 4;
  experienceDetail = 5;
  current_organization_detail = 6;
  linearMode = true;
  stepperForm! : FormGroup;
  user: any = {};
  userId = null;
  
  constructor(private formBuilder: FormBuilder, private route1: Router, private route: ActivatedRoute) { 
    this.createForm()
    this.route.params.subscribe((res) => {
      this.userId = res['id'];
      if(this.userId){
        this.patchFormValue() 
      }
    })
  }

  ngOnInit(): void {

  }

  patchFormValue() {
    let users = JSON.parse(localStorage.getItem('Users')!);
    const currentUser = users.find((m: any) => m.id == this.userId);
    this.stepperForm.patchValue(currentUser);
  }

  onSubmit() {
    if (this.stepperForm.valid) {
      if (!this.userId) {
        var id = new Date().getTime().toString();
        console.log(this.stepperForm.value);
        this.user = Object.assign(this.user, this.stepperForm.value);
        this.user.id = id;
        this.addUser(this.user);
      }
      else {
        this.updateUser();
      }
    }
  }

  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }
    else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
    this.route1.navigate(['/']);
  }

  updateUser() {
    const users = JSON.parse(localStorage.getItem('Users')!);
    if (users) {
      const currentUserindex = users.findIndex((a: any) => a.id == this.userId);
      users[currentUserindex] = {...this.stepperForm.value, id: this.userId};
      localStorage.setItem('Users', JSON.stringify(users));
    this.route1.navigate(['/']);
    }
  }

  createForm() {
    this.stepperForm = this.formBuilder.group({
      personaldetails : this.formBuilder.group({
        firstname: ['', [Validators.required]],
        middlename: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobilenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        contactnumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        date: ['', [Validators.required]],
        uploadimg: ['', [Validators.required]],
        presentaddress: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
        permanentaddress: ['', [Validators.required]]
      }),

      bankdetails : this.formBuilder.group({
        bankname: ['', [Validators.required]],
        accountname: ['', [Validators.required]],
        banknumber: ['', [Validators.required]],
        IFSCcode: ['', [Validators.required]],
        aadharnumber: ['', [Validators.required, Validators.pattern("^[0-9]{12}$")]],
        pannumber: ['', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]]
      }),

      professionaldetails : this.formBuilder.group({
        designation: ['', [Validators.required]],
        department: ['', [Validators.required]],
        years: ['', [Validators.required]],
        months: ['', [Validators.required]],
        current_location: ['', [Validators.required]],
        skill: ['', [Validators.required]],
        uploadresume: ['', [Validators.required]]
      }),

      educationdetails : this.formBuilder.group({
        details: this.formBuilder.array([])
      }),

      experiencedetails : this.formBuilder.group({
        details: this.formBuilder.array([])
      }),

      current_organization_details : this.formBuilder.group({
        joining_date: ['', [Validators.required]],
        next_appraisal: ['', [Validators.required]],
        current_ctc: ['', [Validators.required]]
      })

    });
  }
}
