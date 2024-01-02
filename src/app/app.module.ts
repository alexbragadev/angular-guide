import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleContentComponent } from './content-projection/single-content/single-content.component';
import { MultContentComponent } from './content-projection/mult-content/mult-content.component';
import { ConditionalContentComponent } from './content-projection/conditional-content/conditional-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleContentComponent,
    MultContentComponent,
    ConditionalContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
