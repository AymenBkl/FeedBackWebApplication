import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeadbackComponent } from './feadback/feadback.component';
import { FeedbackhighlightDirective } from './Directive/feedbackhighlight.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material';
import { FeedbackService } from './Services/feedback.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MatSnackBarModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeadbackComponent,
    FeedbackhighlightDirective,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    FeedbackService
  ],
  entryComponents :  [
    SnackBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
