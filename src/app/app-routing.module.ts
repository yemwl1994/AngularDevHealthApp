import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'posts', component: PostsComponent},
  // {path: 'users', component: UsersComponent},
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
