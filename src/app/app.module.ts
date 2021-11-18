import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QimaComponent } from './qimaQA/qima.component';
import { CreateComponent } from './qimaQA/create/create.component';
import { UpdateComponent } from './qimaQA/update/update.component';

@NgModule({
  declarations: [AppComponent, QimaComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
