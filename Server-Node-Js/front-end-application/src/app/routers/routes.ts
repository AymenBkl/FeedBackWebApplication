import {Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FeedbackComponent } from '../feedback/feedback.component';

export const routes : Routes = [
  { path : 'home' ,component : AppComponent},
  { path : 'feedback' , component:FeedbackComponent},
  { path : '', redirectTo : 'home',pathMatch : 'full'}
]
