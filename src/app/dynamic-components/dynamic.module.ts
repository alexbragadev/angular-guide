import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgComponentOutletComponent } from './ng-component-outlet/ng-component-outlet.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';


@NgModule({
  declarations: [
    NgComponentOutletComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgComponentOutletComponent
  ]
})
export class DynamicModule { }
