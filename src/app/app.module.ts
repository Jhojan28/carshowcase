import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { CarService } from './services/car.service';
import { ShowcaseComponent } from './showcase/showcase.component';

const appRoutes:Routes = [
  { path: '', component: ShowcaseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
