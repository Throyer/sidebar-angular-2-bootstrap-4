import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { SidebarModule } from '../layout/sidebar/sidebar.module';
import { NavbarModule } from '../layout/navbar/navbar.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SidebarModule,
    NavbarModule
  ]
})
export class MainModule { }
