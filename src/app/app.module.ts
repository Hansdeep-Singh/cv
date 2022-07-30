import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { SkillchartComponent } from './skillchart/skillchart.component';
import { JarvisComponent } from './jarvis/jarvis.component';
import { OptusComponent } from './optus/optus.component';
import { BtechComponent } from './btech/btech.component';
import { GditComponent } from './gdit/gdit.component';
import { AwardComponent } from './award/award.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    SkillchartComponent,
    JarvisComponent,
    OptusComponent,
    BtechComponent,
    GditComponent,
    AwardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
