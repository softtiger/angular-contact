import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import  { AuthGuard }  from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent }  from './sigup/sigup.component';
import { ContactListComponent }  from './contact-list/contact-list.component';
import { ContactNewComponent }  from './contact-new/contact-new.component';
import { ContactEditComponent }  from './contact-edit/contact-edit.component';
import { TagListComponent }  from './tag-list/tag-list.component';
import { TagNewComponent }  from './tag-new/tag-new.component';
import { TagEditComponent }  from './tag-edit/tag-edit.component';
import { ContactAboutComponent }  from './contact-about/contact-about.component';


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
  component:LayoutComponent,
 // canActivate: [AuthGuard]
},
{
  path:'',
  redirectTo:'/contact',
 // canActivate: [AuthGuard],
  pathMatch:'full'
},
{
  path: 'contact',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children:[
      {
        path: '',
        component:ContactListComponent
      },
      {
        path:'new',         //注意访问时，用  contact/new
        component:ContactNewComponent
      },
      {
        path:'edit/:id',        //注意访问时，用  contact/edit
        component:ContactEditComponent
      }
  ]
},
{
  path: 'tags',
  component: LayoutComponent,
 // canActivate: [AuthGuard],
  children:[
      {
        path: '',
        component:TagListComponent
      },
      {
        path:'new',         //注意访问时，用 tags/new
        component:TagNewComponent
      },
      {
        path:'edit',        //注意访问时，用 tags/edit
        component:TagEditComponent
      }
  ]
},
{
  path: 'about',
  component: LayoutComponent,
 // canActivate: [AuthGuard],
  children:[
      {
        path: '',
        component:ContactAboutComponent
      }
  ]
}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
