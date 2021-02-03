import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home',                 title: 'Home',            icon:'nc-sound-wave',       class: '' },
    { path: '/calendar',             title: 'Calendar',        icon:'nc-calendar-60',      class: '' },
    { path: '/propositions-pfe', title: 'PFE Requests',    icon:'nc-bullet-list-67',   class: '' },
    { path: '/search',               title: 'Search',          icon:'nc-zoom-split',       class: '' },
    { path: '/academic-year',        title: 'Year Management', icon:'nc-book-bookmark',    class: '' },
    { path: '/professors/listing',   title: 'Professors',      icon:'nc-briefcase-24',     class: '' },
    { path: '/students/listing',     title: 'Students',        icon:'nc-hat-3',            class: '' },
    { path: '/profile',              title: 'Profile',         icon:'nc-single-02',        class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

