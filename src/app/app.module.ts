import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatDialogModule} from '@angular/material';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DialogDemoComponent,
    MyDialogComponent,
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
    MatCardModule,
    MatDialogModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ MyDialogComponent ]
})
export class AppModule { }
