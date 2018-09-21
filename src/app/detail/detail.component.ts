import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../services/detail.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html'
})
export class DetailComponent {
	id = null
	car:any = {}
	constructor(private route:ActivatedRoute, private detailService:DetailService) {
		this.id = this.route.snapshot.params['id']
		this.car = detailService.getDetail(this.id)
	}
}