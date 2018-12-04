import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserInputComponent } from './components/home/user-input/user-input.component';
import { ResultOutputComponent } from './components/home/result-output/result-output.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserInputComponent,
    ResultOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
