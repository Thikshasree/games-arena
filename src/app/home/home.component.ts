import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {FormControl} from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, startWith, groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	games:any;
	isDesc=false;
	myControl = new FormControl();
	filteredGames: Observable<String[]>;
	groupedGames=[];

	constructor(private data:DataService) {
	}

	ngOnInit() {

		this.data.getGames().subscribe(result=>{
			this.games=result;
			this.games.shift();
			this.filteredGames = this.myControl.valueChanges
			.pipe(
				startWith(''),
				map(game => game ? this._filterGames(game) : this.games.slice())
				);
			from(this.games)
			.pipe(
				groupBy(game => game.platform),
				mergeMap(group => group.pipe(toArray()))
				)
			.subscribe(val => this.groupedGames.push(val));
			console.log(this.groupedGames);
		},error=>alert("Error from service"))
	}

	onClickSort(){
		if(this.isDesc){
			this.isDesc=false;
			this.games.sort((a,b)=>a.score-b.score);
		}else{
			this.isDesc=true;
			this.games.sort((a,b)=>b.score-a.score);
		}
		
	}

	private _filterGames(value: string): String[] {
		const filterValue = value.toLowerCase();
		return this.games.filter(game => game.title.toLowerCase().indexOf(filterValue) === 0);
	}
}
