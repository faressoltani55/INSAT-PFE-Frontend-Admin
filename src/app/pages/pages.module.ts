import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {PagesRoutingModule} from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        PagesComponent,
    ],
    exports: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ]
})
export class PagesModule { }
