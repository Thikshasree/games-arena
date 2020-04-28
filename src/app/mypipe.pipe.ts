import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class MypipePipe implements PipeTransform {

	transform(items: any[], searchText: string): any[] {
		if(!items) return [];
		if(!searchText) return items;
		searchText = searchText.toLowerCase();
		return items.filter( obj => {
			return obj.title.toLowerCase().includes(searchText);
		});
	}

}