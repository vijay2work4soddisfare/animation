import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import * as firebase from 'firebase';
import { AuthMethods , AngularFireModule , AuthProviders } from 'angularfire2';
import { AppComponent } from './app.component';
import { AnimateComponent } from './animate/animate.component';
import { ListItemComponent } from './list-item/list-item.component';
 const config = {
    apiKey: "AIzaSyApmc0bNZhO7db5buUFRw1sWKiyXezFsN0",
    authDomain: "getmyconcent.firebaseapp.com",
    databaseURL: "https://getmyconcent.firebaseio.com",
    storageBucket: "getmyconcent.appspot.com",
    messagingSenderId: "153750475924"
  };
  const auth={
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
  };
@NgModule({
  declarations: [
    AppComponent,
    AnimateComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp( config , auth)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
