import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { ContadorModule } from './components/contador/contador.module';
import { DbzModule } from './components/dbz/dbz.module';
import { MainPageComponent } from './components/dbz/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
