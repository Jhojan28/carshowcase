import { Injectable } from "@angular/core";

@Injectable()
export class CarService {
    cars:any = [{
        carId: 1,
        title: "motor",
        data: {
            gas: '',
            power: '',
            feeding: '',
            valves: ''
        }
    },{
        carId: 1,
        title: "Performance",
        data: {
            acceleration: '',
            power: '',
            feeding: '',
            valves: ''
        }      
    }]

    getCars() {
        return this.cars
    }

    getCarsByBrand(brand) {
        return this.cars.filter(c=>c.brand == brand) || null
    }
}