import { Component, OnInit , ViewChild, Injectable } from '@angular/core';
import { Feedback } from '../Models/feedback';
import { FormGroup , FormBuilder , Validator, Validators} from '@angular/forms';
import { validationMessages } from './formsValidation';
import { formErrors } from './formErrors';
import {  FeedbackService } from '../Services/feedback.service';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,MatSnackBarConfig} from '@angular/material/snack-bar';
import { flyInOut,expand } from '../Animations/animations';
@Component({
  selector: 'app-feadback',
  templateUrl: './feadback.component.html',
  styleUrls: ['./feadback.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]

})
export class FeadbackComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;
  feedback : Feedback;
  feedbackForm : FormGroup;
  formErrors = formErrors;
  feedbacks : Feedback[];
  validationMessages = validationMessages;
  onProgress = "Normal";
  horizontalPosition : MatSnackBarHorizontalPosition = "center";
  verticalPosition : MatSnackBarVerticalPosition = "bottom";

  constructor(private foormBuilder : FormBuilder,
              private feedbackService : FeedbackService,
              public snackBar : MatSnackBar) {
    this.createForm();
   }

  ngOnInit() {
    this.getFeedbacks();
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
        this.openSnackBar("Thnak You ! ","SUCESS")
        console.log(feedback);
      },
      error => {
        this.onProgress = "Error";
        this.openSnackBar("Something Went Wrong","ERROR")
        console.log(error);
      }  )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition : this.horizontalPosition,
      verticalPosition : this.verticalPosition,

    });
  }

  getFeedbacks() : void {
    this.feedbackService.getFeedbacks()
        .subscribe(
          feedbacks => {
            this.feedbacks = feedbacks.slice(0,5);
          },
          error => {
            console.log(error);
          })
  }
}
