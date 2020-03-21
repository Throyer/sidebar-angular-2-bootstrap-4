import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from '../menu/menu.module';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
