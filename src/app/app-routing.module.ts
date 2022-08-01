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
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'PageZero' } },

  {
    path: 'jarvis',
    component: JarvisComponent,
    data: { animation: 'PageOne' }
  },

  {
    path: 'optus',
    component: OptusComponent,
    data: { animation: 'PageTwo' }
  },

  {
    path: 'gdit',
    component: GditComponent,
    data: { animation: 'PageThree' }
  },

  {
    path: 'award',
    component: AwardComponent,
    data: { animation: 'PageFour' }
  },

  {
    path: 'btech',
    component: BtechComponent,
    data: { animation: 'PageFive' }
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
