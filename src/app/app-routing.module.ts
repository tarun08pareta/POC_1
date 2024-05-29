import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { activeGuard } from './auth/active.guard';
import { deActiveGuard } from './auth/de-active.guard';
import { DataResolveGuard } from './auth/resolve.guard';
import { FormsComponent } from './forms/forms.component';
import {xhildActiveGuard} from './auth/xhild-active.guard'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'service',
    component: ServicesComponent,
    resolve: {
      developmentService: DataResolveGuard
    }
  },
  {
    path: 'project',
    component: ProjectComponent,
    canActivate: [activeGuard],
   
  },
  {
    path: 'skill',
    component: SkillComponent,
    canDeactivate: [deActiveGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path:'forms',
    component:FormsComponent,
    canActivateChild:[xhildActiveGuard],
    children:[
      {
        path:'admin',
        loadChildren: () => import('./forms/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
