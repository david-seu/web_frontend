import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Car } from '../../data/car'
import { GenericService } from '../../generic.service'

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css'],
})
export class ShowCarsComponent implements OnInit {
  cars: Car[] = []

  constructor(
    private service: GenericService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.refresh('')
  }

  refresh(brand: string): void {
    const data = this.service.fetchCars()
    data.subscribe((cars) => {
      cars.forEach((car) => {
        this.cars.push(car)
      })
    })
  }

  navigateToDelete(carId: number): void {
    this.router
      .navigate(['deleteCar'], { queryParams: { id: carId } })
      .then((_) => { })
  }

  navigateToAdd(): void {
    this.router.navigate(['addCar']).then((_) => { })
  }

  navigateToUpdate(carId: number): void {
    this.router
      .navigate(['updateCar'], { queryParams: { id: carId } })
      .then((_) => { })
  }
}
