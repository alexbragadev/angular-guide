import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './forms/form-control/form-control.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: 'form-control', component: FormControlComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
