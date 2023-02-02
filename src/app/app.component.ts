import { AirportsApiService } from "./api/airports-api.service";
import { Component, inject, OnInit } from "@angular/core";
import { AirlinesApiService } from "./api/airlines-api.service";

@Component({
  selector: "app-root",
  template: `
    <div style="text-align:center">
      <h1>List Component Prototype</h1>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  private airlinesApi = inject(AirlinesApiService);
  private aiportsApi = inject(AirportsApiService);

  ngOnInit() {
    this.airlinesApi
      .getAirlines()
      .subscribe((data) => console.log("Airlines Data", data));

    this.aiportsApi
      .getAirports()
      .subscribe((data) => console.log("Airports Data", data));
  }
}
