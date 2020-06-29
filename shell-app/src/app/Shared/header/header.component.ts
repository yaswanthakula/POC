import { Component, OnInit, ViewChild, ElementRef, HostListener, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { ShellCommService } from '../Services/shell-comm.service';
import { NavItem } from '../Models/nav-item';
import { NavService } from '../Services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  navItems: NavItem[] = [
    {
      displayName: 'Service A',
      iconName: '',
      route: 'a',
      children: [
        {
          displayName: 'Comp A',
          iconName: '',
          route: 'a',
          children: []
        },
      ]
    },
    {
      displayName: 'Service B',
      iconName: '',
      route: 'b',
      children: [
        {
          displayName: 'Comp A',
          iconName: '',
          route: 'b',
          children: [
          ]
        }
      ]
    }
  ];

  constructor(private navService: NavService, private commService: ShellCommService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;

    this.commService.init();
    this.commService.preload();
  }
  closeSideNav() {
    this.navService.closeNav();
  }
}