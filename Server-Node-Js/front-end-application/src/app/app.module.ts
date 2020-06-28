import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridList} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
//----- Components ----//
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HighlightFeedbackDirective } from './Directives/highlight-feedback.directive';


//----- Services ----//

import { FeedbackService} from './Services/feedback.service';
import { HttpClientModule } from '@angular/common/http';
import { RoutersModule } from './routers/routers.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    HighlightFeedbackDirective,
  ],
  imports: [
    BrowserModule,
    MatGridList,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    RoutersModule
  ],
  providers: [
    FeedbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
