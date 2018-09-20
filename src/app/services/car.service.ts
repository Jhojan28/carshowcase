import { Injectable } from "@angular/core";

@Injectable()
export class CarService {
    cars:any = [
        { id: 1, picture: '', model: 'BMW M3 Sedán', year: '2018', brand: 'BMW', price: '349900000' },
        { id: 2, picture: '', model: 'AUDI A3 2.0 Sedán TFSI S-Tronic Ambition', year: '2018', brand: 'Audi', price: '125900000' },
        { id: 3, picture: '', model: 'CHEVROLET Cruze LTZ Aut', year: '2018', brand: 'Chevrolet', price: '83920000' },
        { id: 4, picture: '', model: 'CHEVROLET Sail LTZ', year: '2018', brand: 'Chevrolet', price: '42190000' },
        { id: 5, picture: '', model: 'CHEVROLET Onix LTZ MCM', year: '2018', brand: 'Chevrolet', price: '44980000' },
        { id: 6, picture: '', model: 'Mercedes Benz Clase A 200 Urban', year: '2008', brand: 'Mercedes Benz', price: '110900000' }
    ]

    getCars() {
        return this.cars
    }

    getCar(id) {
        return this.cars.find(c=>c.id == id) || null
    }
}