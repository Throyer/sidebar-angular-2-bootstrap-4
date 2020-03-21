import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Menu from "../menu/Menu";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public toggled = false;

  @Output()
  public onToggle: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggled = !this.toggled;
    this.onToggle.emit(this.toggled)
  }

}
