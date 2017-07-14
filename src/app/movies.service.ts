import { Injectable } from '@angular/core';
import { Movie } from './movies/movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesService {

	movies : Movie[];

  constructor(private http : Http) {
  	this.movies = [
  		new Movie("Toy Story","123123"),
  		new Movie("Toy Story 2","123123"),
  		new Movie("Toy Story 3","123124"),
  		new Movie("Toy Story 4","123124")
  	];
  }

  search(keyword : string){
  	// Esto retorna un observadors
  	this.getMovies(keyword).subscribe(
  		movies => {this.movies = movies;console.log(movies);},
  		error => console.log(error)
  	)
  }

  getMovies(keyword : string) : Observable<Movie[]>{
  	return this.http.get("http://www.omdbapi.com/?s="+keyword)	
  									.map(this.parseResponse)
  									.catch(()=> Observable.throw("Algo salio mal"));
  }

  parseResponse(response : Response){
  	if(!response.json() || !response.json().Search) return [];

  	return response.json().Search.map(
  		jsonMovie => new Movie( 
                              jsonMovie['Title'],
                              jsonMovie['imdbID'],
                              jsonMovie['Year'],
                              jsonMovie['Type']
                            )
  	);

  }

}
