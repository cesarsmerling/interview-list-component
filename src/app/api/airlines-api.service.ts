import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AirlinesApiService {
  constructor(private http: HttpClient) {}

  getAirlines() {
    return this.http.get("assets/airlines.json");
  }
}
