import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public toggled = false;

  @Output()
  public onToggle: EventEmitter<boolean> = new EventEmitter();

  menus = [
    {
      icon: "fas fa-home",
      name: "Home",
      route: "/",
      active: false,
      menus: []
    },
    {
      icon: "fas fa-cog",
      name: "Configurações",
      route: null,
      active: false,
      menus: [
        {
          icon: null,
          name: "Example menu",
          route: "/hello",
          active: false,
          menus: []
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  thisMenuHaveMoreMenus({ menus }) {
    return menus && menus.length > 0;
  }

  toggle() {
    this.toggled = !this.toggled;
    this.onToggle.emit(this.toggled)
  }

}
