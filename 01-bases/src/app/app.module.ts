import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroesModule } from './components/heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
