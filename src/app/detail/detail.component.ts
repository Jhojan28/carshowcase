import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html'
})
export class DetailComponent {
	id = null
	car:any ={}
	constructor(private route:ActivatedRoute, private carService:CarService) {
		this.id = this.route.snapshot.params['id']
		this.car = carService.getCar(this.id)
	}
}