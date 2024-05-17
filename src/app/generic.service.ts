import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Car } from './data/car'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
  private backendUrl = 'http://localhost/web_lab/backend/'

  constructor(private http: HttpClient) { }

  fetchCars(): Observable<Car[]> {
    /* body of the method */
    return this.http
      .get<Car[]>(this.backendUrl + `showCars.php`)
      .pipe(catchError(this.handleError<Car[]>('fetchCars', [])))
  }

  deleteCar(carId: number): Observable<unknown> {
    return this.http.post(this.backendUrl + `deleteCar.php`, {
      id: carId,
    })
  }

  addCar(
    brandOf: string,
    modelOf: string,
    yearOf: number,
    mileageOf: number,
    priceOf: number,
    conditionOf: string,
    transmissionOf: string,
    fuelTypeOf: string,
    engineSizeOf: number,
    fuelEfficiencyOf: number,
    colorOf: string,
  ): Observable<any> {
    return this.http.post(this.backendUrl + `addCar.php`, {
      brand: brandOf,
      model: modelOf,
      year: yearOf,
      mileage: mileageOf,
      price: priceOf,
      condition: conditionOf,
      transmission: transmissionOf,
      fuel_type: fuelTypeOf,
      engine_size: engineSizeOf,
      fuel_efficiency: fuelEfficiencyOf,
      color: colorOf,
    })
  }

  updateCar(
    idOf: number,
    brandOf: string,
    modelOf: string,
    yearOf: number,
    mileageOf: number,
    priceOf: number,
    conditionOf: string,
    transmissionOf: string,
    fuelTypeOf: string,
    engineSizeOf: number,
    fuelEfficiencyOf: number,
    colorOf: string,
  ): Observable<unknown> {
    return this.http.post(this.backendUrl + `updateCar.php`, {
      id: idOf,
      brand: brandOf,
      model: modelOf,
      year: yearOf,
      mileage: mileageOf,
      price: priceOf,
      condition: conditionOf,
      transmission: transmissionOf,
      fuel_type: fuelTypeOf,
      engine_size: engineSizeOf,
      fuel_efficiency: fuelEfficiencyOf,
      color: colorOf,
    })
  }

  private handleError<T>(
    operation = 'operation',
    result?: T,
  ): (error: unknown) => Observable<T> {
    return (error: unknown): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }
}
