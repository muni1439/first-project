import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userForm:any;

  constructor(public formBuilder:FormBuilder){
    
  }

  ngOnInit(){
    this.userForm=this.formBuilder.group({
      name:[null,[Validators.required,Validators.maxLength(26)]],
      email:[null,[Validators.required,Validators.email]],
      message:[null]

    });
  }

  onSubmit(){
    let emailSentSuccessfully: boolean=false;
    if(this.userForm.valid){
      const name = this.userForm.get('name').value;
      const email = this.userForm.get('email').value;
      const message = this.userForm.get('message').value;
      this.userForm.reset();
      
      emailjs.init('CIewBC49vh97h009N');
      emailjs.send("service_0tvabvw","template_rk12j8o",{
        from_name: "surya",
        name: name,
        send_to: email,
        reply_to:'kapisetti.syr2022@gmail.com'
        }).then(
          () => {
            console.log('SUCCESS!');
            emailSentSuccessfully=true;
          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
          },
        );

        if(emailSentSuccessfully){
          alert('Email sent succesfully to Surya');
          this.userForm.reset();
        }
        
     
    }
    else{
      console.log('Form is invalid')
    }
    
  }

}
