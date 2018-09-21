import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { DetailService } from '../services/detail.service';
import { CategoryService } from '../services/category.service';

@Component({
	selector: 'app-compare',
	templateUrl: './compare.component.html'
})
export class CompareComponent {
	imagePaths:any = [
		'assets/images/car.png',
		'assets/images/car.png',
		'assets/images/car.png'
	]
	cars:any = []
	ids:any = []
	details:any = []
	carNames:any = [{model:''},{model:''},{model:''}]
	constructor(private carService:CarService, private detailService:DetailService){
		this.cars = this.carService.getCars()
	}

	mostrarCarro(carr, selected) {
		this.ids[carr] = selected
		if(selected != "-1") {
			this.carNames[carr] = this.carService.getCar(selected)
			this.imagePaths[carr] = this.carNames[carr].picture
			this.details = this.detailService.getDetails(this.ids)
			console.log(this.details)
		} else {
			this.imagePaths[carr] = 'assets/images/car.png'
			this.carNames[carr] = {model:''}
			this.details[carr] = null
		}
	}
}