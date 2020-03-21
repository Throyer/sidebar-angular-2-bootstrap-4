import { Component, OnInit, Input } from '@angular/core';
import Menu from './Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    {
      id: 1,
      icon: "fas fa-home",
      name: "Home",
      route: "/home",
      active: false,
      menus: []
    },
    {
      id: 2,
      icon: "fas fa-hand-holding-usd",
      name: "Financeiro",
      route: null,
      active: false,
      menus: [
        {
          id: 6,
          icon: null,
          name: "Example menu",
          route: "/",
          active: false,
          menus: []
        },
        {
          id: 7,
          icon: null,
          name: "Example menu",
          route: "/",
          active: false,
          menus: []
        },
        {
          id: 8,
          icon: null,
          name: "Example menu",
          route: "/",
          active: false,
          menus: []
        },
        {
          id: 9,
          icon: null,
          name: "Example menu",
          route: "/",
          active: false,
          menus: []
        },
      ]
    },
    {
      id: 3,
      icon: "fas fa-chart-pie",
      name: "Estatisticas",
      route: null,
      active: false,
      menus: [
        {
          id: 10,
          icon: null,
          name: "Example menu",
          route: "/",
          active: false,
          menus: []
        }
      ]
    },
    {
      id: 4,
      icon: "fas fa-glass-cheers",
      name: "Party",
      route: null,
      active: false,
      menus: [
        {
          id: 11,
          icon: null,
          name: "Example menu",
          route: "/",
          active: false,
          menus: []
        }
      ]
    },
    {
      id: 5,
      icon: "fas fa-cog",
      name: "Configurações",
      route: null,
      active: false,
      menus: [
        {
          id: 12,
          icon: null,
          name: "Example menu",
          route: "/",
          active: false,
          menus: []
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit() { }

  public thisMenuHaveMoreMenus(menu: Menu): boolean {
    return menu.menus.length > 0;
  }

  expand(id: any): void {
    this.menus = this.menus.map(menu => {

      if (menu.id === id) {
        menu.active = !menu.active;
      } else {
        menu.active = false;
      }
      return menu;
    })
  }

}
