import { Injectable } from "@angular/core";

@Injectable()
export class CarService {
    cars:any = [
        { id: 1, picture: '', model: 'Hyundai i30', year: '2014', brand: 'Hyundai', price: '43000000' },
        { id: 2, picture: '', model: 'Audi A3 1.8T Quattro', year: '2015', brand: 'Audi', price: '73000000' },
        { id: 3, picture: '', model: 'Peugeot 4008', year: '2017', brand: 'Peugeot', price: '112478399' },
        { id: 4, picture: '', model: 'Chevrolet Cruze LTZ', year: '2018', brand: 'Chevrolet', price: '83920000' },
        { id: 5, picture: '', model: 'Chevrolet Sail LTZ', year: '2018', brand: 'Volvo', price: '31500000' },
        { id: 6, picture: '', model: 'Porsche Boxster', year: '2008', brand: 'Porsche', price: '145000000' }
    ]

    getCars() {
        return this.cars
    }

    getCar(id) {

    }

    getCarsByBrand(brand) {
        return this.cars.filter(c=>c.brand == brand) || null
    }
}