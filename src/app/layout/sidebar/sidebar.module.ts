import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    RouterModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
