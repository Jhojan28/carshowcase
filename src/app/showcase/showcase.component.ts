import { Component, Injectable } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
	selector: 'app-showcase',
	templateUrl: './showcase.component.html',
	styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
	cars:any = []
	constructor(private carSerivice:CarService) {
		this.cars = carSerivice.getCars()
	}
}