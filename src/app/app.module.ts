import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposalPageComponent } from './components/proposal-page/proposal-page.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProposalPageComponent,
    SuccessPageComponent
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