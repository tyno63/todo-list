import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ArraySizeComponent } from './array-size/array-size.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    ArraySizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }