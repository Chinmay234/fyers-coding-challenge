import { Component } from "@angular/core";
import flight_data from "./data";

export class FlightService {
  private data: any;

  constructor() {
    this.data = flight_data;
  }

  private getFlight() {
    return this.data;
  }

  searchFlight(source: string, dest: string) {
    return this.getFlight().filter(
      (f) => f.source.key === source && f.destination.key === dest
    );
  }

  booknow(name: string, email: string) {
    return true;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [FlightService]
})
export class AppComponent {
  // your code here
  flightList = [];
  isBooked = false;
  name = "";
  email = "";
  source = "";
  dest = "";
  when = "";

  public constructor(private flightService: FlightService) {}

  search() {
    this.flightList = this.flightService.searchFlight(this.source, this.dest);
    console.log(this.flightList[0].departure);
  }

  bookFlight() {
    this.isBooked = this.flightService.booknow(this.name, this.email);
  }
  cancelBooking() {}
}
