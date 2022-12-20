import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
