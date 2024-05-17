import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { GenericService } from '../../generic.service'

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css'],
})
export class UpdateCarComponent implements OnInit {
  constructor(
    private service: GenericService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void { }

  updateCar(
    brand: string,
    model: string,
    year: number,
    mileage: number,
    price: number,
    condition: string,
    transmission: string,
    fuel_type: string,
    engine_size: number,
    fuel_effieciency: number,
    color: string,
  ): void {
    const id = this.route.snapshot.queryParams['id']
    this.service
      .updateCar(
        id,
        brand,
        model,
        year,
        mileage,
        price,
        condition,
        transmission,
        fuel_type,
        engine_size,
        fuel_effieciency,
        color,
      )
      .subscribe(() => {
        this.router.navigate(['showCars']).then((_) => { })
      })
  }

  onCancel(): void {
    this.router.navigate(['showCars']).then((_) => { })
  }
}
