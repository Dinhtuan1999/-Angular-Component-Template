import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackernewComponent } from './hackernew/hackernew.component';
import { FormsModule } from '@angular/forms';
import { LikesComponent } from './likes/likes.component';

import { CheckAllComponent } from './check-all/check-all.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewComponent,
    LikesComponent,
    
    CheckAllComponent,
    
    NavbarComponent,
    
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
