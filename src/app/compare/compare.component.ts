import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { DetailService } from '../services/detail.service';
import { CategoryService } from '../services/category.service';

@Component({
	selector: 'app-compare',
	templateUrl: './compare.component.html'
})
export class CompareComponent {
	cars:any = []
	ids:any = []
	details:any = []
	carNames:any = [{model:''},{model:''},{model:''}]
	constructor(private carService:CarService, private detailService:DetailService){
		this.cars = this.carService.getCars()
	}

	mostrarCarro(carr, selected) {
		let index
		this.ids[carr] = selected
		if(selected != "-1") {
			this.carNames[carr] = this.carService.getCar(selected)
			this.details = this.detailService.getDetails(this.ids)
		} else {
			this.carNames[carr] = {model:''}
			this.details[carr] = null
		}
	}
}