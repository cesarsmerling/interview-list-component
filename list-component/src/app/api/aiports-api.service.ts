import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AirportsApiService {
  constructor(private http: HttpClient) {}

  getAirports() {
    return this.http.get("assets/airports.json");
  }
}
