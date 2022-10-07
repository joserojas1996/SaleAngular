import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { TopbarComponent } from './element/topbar/topbar.component';
import { WelcomeComponent } from './element/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WelcomeComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
