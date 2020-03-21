import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot()
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
