import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Shipping1SharedModule } from 'app/shared/shared.module';
import { Shipping1CoreModule } from 'app/core/core.module';
import { Shipping1AppRoutingModule } from './app-routing.module';
import { Shipping1HomeModule } from './home/home.module';
import { Shipping1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Shipping1SharedModule,
    Shipping1CoreModule,
    Shipping1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Shipping1EntityModule,
    Shipping1AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Shipping1AppModule {}
