import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent }  from './sigup/sigup.component';


const routes: Routes = [
{
  path: 'sigin',
  component: SiginComponent
},
{
  path: 'signup',
  component: SigupComponent
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
