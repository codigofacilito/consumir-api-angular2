import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	keyword : string = "";
  keywordControl : FormControl = new FormControl();
  
  constructor(private service : MoviesService) { }

  ngOnInit() {
    this.keywordControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(newValue => this.service.search(newValue));
  }

  search(){
  	this.service.search(this.keyword);
  }

}
