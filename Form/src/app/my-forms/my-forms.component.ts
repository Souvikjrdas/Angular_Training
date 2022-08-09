import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , FormBuilder,Validator, Validators , AbstractControl, FormArray, Form} from  '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';


function calcage(c:AbstractControl) : {[key:string] : boolean} | null{            //pre-defining custom validation

    return {'age': true}
}

function emailCompare(c:AbstractControl) : {[key:string] : boolean} | null{
  const email = c.get('email')?.value;
  const cemail = c.get('cemail')?.value;
  if(email !== cemail){
    return {'notMatched':true}
  }
  return null
}

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit {

  myForm: FormGroup;
  emailMessage: string = "";

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      age : [null],
      emailGroup : this.fb.group({
        email : ['',[Validators.required,Validators.email]],
        cemail: ['',[Validators.required ,Validators.email]],
      },{validator : emailCompare}),
      phone: '',
      notification: '',
      sendCatalog: false,
      address : this.fb.array([this.buildAddress()])
    })

    this.myForm.get('notification')?.valueChanges.subscribe(value =>
      this.SetNotification(value)
    )

    this.myForm.get('age')?.valueChanges.pipe(distinctUntilChanged()).subscribe(value =>{
      this.updateAge(value)
    })

    this.myForm.get('emailGroup')?.valueChanges.subscribe(value =>{
      console.log(value.email)
    })

    const emailControl = this.myForm.get('emailGroup.email');
    emailControl?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );

   }

  ngOnInit(): void {
    this.fb.control({
      title:''
    })

  }

  get address() :FormArray{
    return <FormArray>this.myForm.get('address');
  }

  buildAddress(): FormGroup{
    return this.fb.group({
      addressType: 'home',
      street1: ['', Validators.required],
      street2: '',
      city: '',
      state: '',
    })
  }


  addAddress(){

  }

  Submit(){
    // console.log(this.myForm.value);
    // console.log(this.myForm.get('cemail'))
    // console.log(this.myForm.get('cemail')?.dirty)
    // this.myForm.reset();
    // // this.myForm.patchValue({
    // //   lastName:'das',
    // //   phone: '7439706445'
    // // })
  }

  updateAge(value : number):void{
    const age = this.myForm.get('age')

    if(value < 18){
      age?.setValidators(calcage);
    }
    else{
      age?.clearValidators();
    }
    age?.updateValueAndValidity();
  }

  SetNotification(value:string) : void{
    const phone = this.myForm.get('phone');
    if(value == 'text'){
      phone?.setValidators(Validators.required);
    }
    else{
      phone?.clearValidators();
    }
    phone?.updateValueAndValidity();

    console.log(value)

    for(let item of this.address.controls){
      console.log(item)
    }
    // console.log(this.address)

  }

  deleteMessage(value:any){
    this.emailMessage = ""
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = this.validationMessages.email
    }
  }



}
