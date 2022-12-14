import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DoubleScrollComponent } from './double-scroll/double-scroll.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DoubleScrollComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
