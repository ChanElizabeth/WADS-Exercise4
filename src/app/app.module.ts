import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AuthGuard } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDh4G6rr2vgBSgz660TI6U55rIXyHo19j4",
  authDomain: "wads-exercise-4.firebaseapp.com",
  databaseURL: "https://wads-exercise-4.firebaseio.com",
  projectId: "wads-exercise-4",
  storageBucket: "wads-exercise-4.appspot.com",
  messagingSenderId: "830828985753",
  appId: "1:830828985753:web:49deddb948cbe79800a708",
  measurementId: "G-0CHN0SHBRF"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AuthModule,
  ],
  providers: [AngularFireModule, AngularFireAuth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
