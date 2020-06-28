import { Component, OnInit , ViewChild } from '@angular/core';
import { Feedback } from '../Models/feedback';
import { FormGroup , FormBuilder , Validator, Validators} from '@angular/forms';
import { validationMessages } from './formsValidation';
import { formErrors } from './formErrors';
import {  FeedbackService } from '../Services/feedback.service';
@Component({
  selector: 'app-feadback',
  templateUrl: './feadback.component.html',
  styleUrls: ['./feadback.component.scss']
})
export class FeadbackComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;
  feedback : Feedback;
  feedbackForm : FormGroup;
  formErrors = formErrors;
  validationMessages = validationMessages;
  onProgress = "Normal";

  constructor(private foormBuilder : FormBuilder,
              private feedbackService : FeedbackService) {
    this.createForm();
   }

  ngOnInit() {
    this.feedbackService.postTest()
      .subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      } );
  }

  createForm() : void {
    this.feedbackForm = this.foormBuilder.group({
      firstName : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastName : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      email : ['',[Validators.required,Validators.email]],
      rating : [1,[Validators.required]],
      feedbackMessage : ['',[Validators.required]]
    });

    this.feedbackForm.valueChanges
        .subscribe(data => {
            this.onValueChanged(data);
        });

    this.onValueChanged();
  }

  onSubmit() : void {
    this.feedback = this.feedbackForm.value;
    this.postFeedback();
    this.resetForm();
    this.feedbackFormDirective.resetForm();
  }


  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  resetForm() : void {
    this.feedbackForm.reset({
        firstName : '',
       lastName: '',
       email : '',
       rating : 1,
       feedbackMessage : ''
    })
  }

  postFeedback() : void {
    this.onProgress = "Posting";
    this.feedbackService.postFeedBack(this.feedback)
      .subscribe(feedback => {
        this.onProgress = "Normal";
        console.log(feedback);
      },
      error => {
        this.onProgress = "Error";
        console.log(error);
      }  )
  }
}
