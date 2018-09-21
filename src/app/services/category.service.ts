import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
    categories:any = [
        { id:1, name: "Motor" },
        { id:2, name: "Transmisión" },
        { id:3, name: "Suspensiones" },
        { id:4, name: "Sistema de Frenos" },
        { id:5, name: "Ruedas" },
        { id:6, name: "Dimensiones" }
    ];

    getCategories() {
        return this.categories;
    }
}