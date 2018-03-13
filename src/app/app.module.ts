import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
