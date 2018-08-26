import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'clinic', component: ClinicComponent},
  {path: 'specialist', component: SpecialistsComponent}
  // {path: 'post/:id', component: PostComponent},
  // {path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
