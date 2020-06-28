import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as R } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    R.forRoot(routes)
  ],
  exports : [
    R
  ],
  declarations: []
})
export class RouterModule { }
