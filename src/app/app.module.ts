import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SearchService} from './Search/search.service'
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
