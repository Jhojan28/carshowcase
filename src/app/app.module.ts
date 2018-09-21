import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { CarService } from './services/car.service';
import { ShowcaseComponent } from './showcase/showcase.component';
import { DetailComponent } from './detail/detail.component';
import { CategoryService } from './services/category.service';
import { DetailService } from './services/detail.service';
import { CompareComponent } from './compare/compare.component';

const appRoutes:Routes = [
  { path: '', component: ShowcaseComponent },
  { path: 'home', component: ShowcaseComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'compare', component: CompareComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    DetailComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [CarService, CategoryService, DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
