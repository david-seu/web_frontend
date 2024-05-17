import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ShowCarsComponent } from './pages/show_cars/show_cars.component';
import { AddCarComponent } from './pages/add_car/add-car.component';
import { DeleteCarComponent } from './pages/remove_car/remove-car.component';
import { UpdateCarComponent } from './pages/update_car/update-car.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/showCars', pathMatch: 'full' },
    { path: 'showCars', component: ShowCarsComponent },
    { path: 'deleteCar', component: DeleteCarComponent },
    { path: 'addCar', component: AddCarComponent },
    { path: 'updateCar', component: UpdateCarComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ShowCarsComponent,
        AddCarComponent,
        DeleteCarComponent,
        UpdateCarComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}