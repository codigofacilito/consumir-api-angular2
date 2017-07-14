import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { MoviesService } from './movies.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
