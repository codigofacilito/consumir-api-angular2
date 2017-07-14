export class Movie{
	title : string;
	id : string;
	year ?: string;
	type ?: string;

	constructor(title : string, id : string, year ?: string,
							type ?: string){
		this.title = title;
		this.id = id;
		if(year) this.year = year;
		if(type) this.type = type;
	}
}