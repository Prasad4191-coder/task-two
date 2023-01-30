import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';

const routes: Routes = [
  { path : '' , redirectTo: '/form-a',pathMatch : 'full' },
  { path : 'form-a', component: FormAComponent },
  { path : 'form-b', component: FormBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
