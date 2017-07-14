import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movies/movie';

import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private service : MoviesService) { }

  agregarPelicula(){
  	console.log(":)");
  	this.service.movies
  			.push(new Movie("Up","asdasd12"));
  }

}
