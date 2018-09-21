import { Injectable } from "@angular/core";
import { CategoryService } from "./category.service";
import { CarService } from "./car.service";

@Injectable()
export class DetailService {
    detail:any = [
        {   
            id:1, carId: 1, categoryId: 1, detail: [
                { name: "Motor", description: "Motor de gasolina de 6 cilindros en línea TwinPower Turbo M." },
                { name: "Capacidad del tanque de combustible (Galones)", description: "15" },
                { name: "Potencia (H.P)", description: "431/5500-7300" },
                { name: "Cilindrada (c.c³)", description: "2979" },
                { name: "Velocidad Máxima", description: "250" }
            ] 
        },{ 
            id:2, carId: 1, categoryId: 2, detail: [
                { name: "Cantidad de cambios adelante", description: "6" }
            ] 
        },{ 
            id:3, carId: 1, categoryId: 3, detail: [
                { name: "Amortiguadores", description: "Suspensión adaptativa M" }
            ]
        },{
            id:4, carId: 1, categoryId: 4, detail: [
                { name: "Tipo de frenos", description: "Frenos compuestos M" }
            ]
        },{
            id:5, carId: 1, categoryId: 5, detail: [
                { name: "Dimensiones Llanta Delantera", description: "255/40" },
                { name: "Llantas (dimensiones)", description: "0" },
                { name: "Dimensiones Rin", description: "18" }
            ]
        },{
            id:6, carId: 1, categoryId: 6, detail: [
                { name: "Largo/ancho/alto (mts.)", description: "4.6/1.8/1.4" },
                { name: "Capacidad de carga", description: "565 Kg" },
                { name: "Peso (kgrs.)", description: "1610" }
            ]
        },{   
            id:7, carId: 2, categoryId: 1, detail: [
                { name: "Motor", description: "El motor 1.2 TFSI" },
                { name: "Capacidad del tanque de combustible (Galones)", description: "50" },
                { name: "Potencia (H.P)", description: "110" },
                { name: "Cilindrada (c.c³)", description: "1197" },
                { name: "Velocidad Máxima", description: "198 Km/h" }
            ] 
        },{ 
            id:8, carId: 2, categoryId: 2, detail: [
                { name: "Cantidad de cambios adelante", description: "6" }
            ] 
        },{
            id:9, carId: 2, categoryId: 6, detail: [
                { name: "Pasajeros", description: "5" },
                { name: "Largo/ancho/alto (mts.)", description: "4.4/1.7/1.4" },
                { name: "Peso (kgrs.)", description: "1765" }
            ]
        },        {   
            id:10, carId: 3, categoryId: 1, detail: [
                { name: "Motor", description: "Delantero transversal a gasolina." },
                { name: "Capacidad del tanque de combustible (Galones)", description: "13.7" },
                { name: "Potencia (H.P)", description: "153" },
                { name: "Cilindrada (c.c³)", description: "1399" },
                { name: "Velocidad Máxima", description: "" }
            ] 
        },{ 
            id:11, carId: 3, categoryId: 2, detail: [
                { name: "Cantidad de cambios adelante", description: "6" }
            ] 
        },{ 
            id:12, carId: 3, categoryId: 3, detail: [
                { name: "Amortiguadores", description: "Telecopicos a gas" }
            ]
        },{
            id:13, carId: 3, categoryId: 4, detail: [
                { name: "Tipo de frenos", description: "Hidráulicos ABS" }
            ]
        },{
            id:14, carId: 3, categoryId: 5, detail: [
                { name: "Dimensiones Llanta Delantera", description: "215 / 55" },
                { name: "Llantas (dimensiones)", description: "215" },
                { name: "Dimensiones Rin", description: "16" }
            ]
        },{
            id:15, carId: 3, categoryId: 6, detail: [
                { name: "Largo/ancho/alto (mts.)", description: "4.66/1.79/1.45" },
                { name: "Capacidad de carga", description: "492 Kg" },
                { name: "Peso (kgrs.)", description: "1290" }
            ]
        },{   
            id:16, carId: 4, categoryId: 1, detail: [
                { name: "Motor", description: "4 cilindros en línea, 16 válvulas" },
                { name: "Capacidad del tanque de combustible (Galones)", description: "12" },
                { name: "Potencia (H.P)", description: "102/6.000" },
                { name: "Cilindrada (c.c³)", description: "1399" },
                { name: "Velocidad Máxima", description: "200 Km/h" }
            ] 
        },{ 
            id:17, carId: 4, categoryId: 2, detail: [
                { name: "Cantidad de cambios adelante", description: "5" }
            ] 
        },{ 
            id:18, carId: 4, categoryId: 3, detail: [
                { name: "Amortiguadores", description: "Hidráulicos" }
            ]
        },{
            id:19, carId: 4, categoryId: 4, detail: [
                { name: "Tipo de frenos", description: "Hidraúlicos" }
            ]
        },{
            id:20, carId: 4, categoryId: 5, detail: [
                { name: "Dimensiones Llanta Delantera", description: "185/60" },
                { name: "Dimensiones Rin", description: "14" }
            ]
        },{
            id:21, carId: 4, categoryId: 6, detail: [
                { name: "Largo/ancho/alto (mts.)", description: "4.290/1.690/1.503" },
                { name: "Capacidad de carga", description: "343 Kg" },
                { name: "Peso (kgrs.)", description: "1092" }
            ]
        },{   
            id:22, carId: 5, categoryId: 1, detail: [
                { name: "Motor", description: "Delantera transversal a gasolina." },
                { name: "Capacidad del tanque de combustible (Galones)", description: "14.2" },
                { name: "Potencia (H.P)", description: "98" },
                { name: "Cilindrada (c.c³)", description: "1369" },
                { name: "Velocidad Máxima", description: "" }
            ] 
        },{ 
            id:23, carId: 5, categoryId: 2, detail: [
                { name: "Cantidad de cambios adelante", description: "6" }
            ] 
        },{ 
            id:24, carId: 5, categoryId: 3, detail: [
                { name: "Suspensión delantera", description: "Suspensión trasera" },
                { name: "Suspensión trasera", description: "Barra de torsión" }
            ]
        },{
            id:25, carId: 5, categoryId: 4, detail: [
                { name: "Tipo de frenos", description: "Hidráulicos doble en diagonal / ABS" },
                { name: "Tipo de frenos delanteros", description: "Discos ventilados" },
                { name: "Tipo de frenos traseros", description: "Tambors" }
            ]
        },{
            id:26, carId: 5, categoryId: 5, detail: [
                { name: "Dimensiones Llanta Delantera", description: "185/65" },
                { name: "Dimensiones Rin", description: "15" }
            ]
        },{
            id:27, carId: 5, categoryId: 6, detail: [
                { name: "Largo/ancho/alto (mts.)", description: "3.93/1.96/1.48" },
                { name: "Capacidad de carga", description: "391 kg" },
                { name: "Peso (kgrs.)", description: "1089" }
            ]
        },{   
            id:28, carId: 6, categoryId: 1, detail: [
                { name: "Motor", description: "4 cilindros en línea, 16 válvulas, Turbocompresor" },
                { name: "Capacidad del tanque de combustible (Galones)", description: "13,2" },
                { name: "Potencia (H.P)", description: "154/5.300" },
                { name: "Cilindrada (c.c³)", description: "1595" },
                { name: "Velocidad Máxima", description: "224 Km/h" }
            ] 
        },{ 
            id:29, carId: 6, categoryId: 2, detail: [
                { name: "Cantidad de cambios adelante", description: "7" }
            ] 
        },{ 
            id:30, carId: 6, categoryId: 3, detail: [
                { name: "Amortiguadores", description: "Hidráulicos" }
            ]
        },{
            id:31, carId: 6, categoryId: 4, detail: [
                { name: "Tipo de frenos", description: "Hidraúlicos" },
                { name: "Tipo de frenos delanteros", description: "Discos" },
                { name: "Tipo de frenos traseros", description: "Discos sólidos" }
            ]
        },{
            id:32, carId: 6, categoryId: 5, detail: [
                { name: "Dimensiones Llanta Delantera", description: "225/45" },
                { name: "Dimensiones Rin", description: "17" }
            ]
        },{
            id:33, carId: 6, categoryId: 6, detail: [
                { name: "Largo/ancho/alto (mts.)", description: "4.29/1.78/1.43" },
                { name: "Capacidad de carga", description: "ND" },
                { name: "Peso (kgrs.)", description: "1370" }
            ]
        }
    ];

    constructor(private categoryService:CategoryService, private carService:CarService){}

    getDetail(id) {
        const details:any = this.detail.filter(d=>d.carId == id);
        let categories:any = [];
        details.forEach(detail => {     
            categories.push({ category: this.categoryService.getCategories().find(category=>category.id == detail.categoryId), detail: detail.detail });
        });

        return {
            car: this.carService.getCar(id), 
            detail: categories
        }
    }

    getDetails(ids:any) {
        let response:any = [];
        let result:any = {};
        ids.forEach(id => {
            result = this.getDetail(id);
            response.push({ detail: result.detail, car: result.car });
        });
        return response;
    }
}