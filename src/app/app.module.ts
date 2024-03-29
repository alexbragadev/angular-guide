import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleContentComponent } from './content-projection/single-content/single-content.component';
import { MultContentComponent } from './content-projection/mult-content/mult-content.component';
import { ConditionalContentComponent } from './content-projection/conditional-content/conditional-content.component';
import { TemplateOutletComponent } from './content-projection/templateOutlet/template-outlet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicModule } from './dynamic-components/dynamic.module';
import { FormModule } from './forms/form.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SingleContentComponent,
    MultContentComponent,
    ConditionalContentComponent,
    TemplateOutletComponent
  ],
  imports: [
    BrowserModule,
    FormModule,
    BrowserAnimationsModule,
    [DynamicModule, AppRoutingModule]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
