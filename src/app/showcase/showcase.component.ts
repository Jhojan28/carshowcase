import { Component, Injectable } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-showcase',
	templateUrl: './showcase.component.html',
	styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
	cars:any = []
	search:string = ""
	brand:string = ""
	constructor(private route:ActivatedRoute,private carSerivice:CarService) {
		this.route.queryParamMap.subscribe(params => {
			this.search = params.get("search")
			if(typeof this.search !== 'undefined' && this.search !== null && this.search !== "") {
				this.cars = carSerivice.getCarsByBrand(this.search)
			} else {
				this.cars = carSerivice.getCars()
				this.brand = ""
			}
		})
	}
}