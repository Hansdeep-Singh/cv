import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardComponent } from './award/award.component';
import { BtechComponent } from './btech/btech.component';
import { GditComponent } from './gdit/gdit.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JarvisComponent } from './jarvis/jarvis.component';
import { OptusComponent } from './optus/optus.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'header',
    component: HeaderComponent,
  },

  {
    path: 'jarvis',
    component: JarvisComponent,
  },

  {
    path: 'optus',
    component: OptusComponent,
  },

  {
    path: 'gdit',
    component: GditComponent,
  },

  {
    path: 'award',
    component: AwardComponent,
  },

  {
    path: 'btech',
    component: BtechComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
