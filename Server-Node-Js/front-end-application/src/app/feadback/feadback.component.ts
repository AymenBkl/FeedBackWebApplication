import { Component, OnInit , ViewChild } from '@angular/core';
import { Feedback } from '../Models/feedback';
import { FormGroup , FormBuilder , Validator} from '@angular/forms';
@Component({
  selector: 'app-feadback',
  templateUrl: './feadback.component.html',
  styleUrls: ['./feadback.component.css']
})
export class FeadbackComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;
  feedback : Feedback;
  feedbackForm : FormGroup;
  constructor(private foormBuilder : FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() : void {
    this.feedbackForm = this.foormBuilder.group({
      firstName : '',
      lastName : '',
      email : '',
      rating : 1,
      feedbackMessage : ''
    })

  }

  onSubmit() : void {
    this.feedback = this.feedbackForm.value;
    this.feedbackFormDirective.reset();
  }

}
