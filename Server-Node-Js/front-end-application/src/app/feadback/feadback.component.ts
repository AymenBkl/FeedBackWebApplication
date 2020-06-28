import { Component, OnInit , ViewChild } from '@angular/core';
import { Feedback } from '../Models/feedback';
import { FormGroup , FormBuilder , Validator, Validators} from '@angular/forms';
import { validationMessages } from './formsValidation';
import { formErrors } from './formErrors';
@Component({
  selector: 'app-feadback',
  templateUrl: './feadback.component.html',
  styleUrls: ['./feadback.component.css']
})
export class FeadbackComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;
  feedback : Feedback;
  feedbackForm : FormGroup;
  formErrors = formErrors;
  validationMessages = validationMessages;

  constructor(private foormBuilder : FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() : void {
    this.feedbackForm = this.foormBuilder.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      email : ['',[Validators.required]],
      rating : ['',[Validators.required]],
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
    this.feedbackFormDirective.reset();
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

}
