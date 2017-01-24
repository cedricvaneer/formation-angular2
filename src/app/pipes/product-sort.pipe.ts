import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'productSort'
})
export class ProductSortPipe implements PipeTransform {

  transform(productArrayInput: Product[], sortCriteria: string = 'title'): Product[] {
  	return productArrayInput.sort(function(a, b){
  		if (a[sortCriteria] < b[sortCriteria]){
  			return -1;
  		}
  		if (a[sortCriteria] > b[sortCriteria]){
  			return 1;
  		}
  		return 0;
  	});
  }

}
