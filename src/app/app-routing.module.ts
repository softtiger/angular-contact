import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent }  from './sigup/sigup.component';
import { ContactListComponent }  from './contact-list/contact-list.component';
import { ContactNewComponent }  from './contact-new/contact-new.component';
import { ContactEditComponent }  from './contact-edit/contact-edit.component';



const routes: Routes = [
{
  path: 'sigin',
  component: SiginComponent
},
{
  path: 'signup',
  component: SigupComponent
},
{
  path: 'layout',
  component:LayoutComponent
},
{
  path:'',
  redirectTo:'/contact',
  pathMatch:'full'
},
{
  path: 'contact',
  component: LayoutComponent,
  children:[
      {
        path: '',
        component:ContactListComponent
      }
  ]
}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
