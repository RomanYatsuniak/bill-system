import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BillsModule } from './modules/bills/bills.module';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './modules/signup/signup.component';
import { SignupModule } from './modules/signup/signup.module';
import {AdminModule} from './modules/admin/admin.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatCell, MatHeaderCell, MatHeaderRow, MatTable} from '@angular/material/table';
import {HomeModule} from './modules/home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
