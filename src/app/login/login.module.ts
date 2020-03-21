import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
