import { TestBed, fakeAsync, ComponentFixture } from "@angular/core/testing";
import { AppComponent, FlightService } from "./app.component";
import { FormsModule } from "@angular/forms";

describe("AppComponent", () => {
  let flightServiceStub: any;
  let flightService: FlightService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;
  let source: HTMLInputElement;
  let destination: HTMLInputElement;
  let when: HTMLInputElement;
  let searchBtn: HTMLButtonElement;
  let booknowBtn: HTMLButtonElement;
  let confirmBookingBtn: HTMLButtonElement;
  // let name: HTMLInputElement;
  // let email: HTMLInputElement;

  beforeEach(async () => {
    flightServiceStub = {};

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: FlightService, useValue: flightServiceStub }],
      imports: [FormsModule]
    });

    flightService = TestBed.inject(FlightService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    h1 = fixture.nativeElement.querySelector("h1#title");
    source = fixture.nativeElement.querySelector("input#source");
    destination = fixture.nativeElement.querySelector("input#destination");
    when = fixture.nativeElement.querySelector("input#when");

    searchBtn = fixture.nativeElement.querySelector("button#search_flights");
  });

  it("should display Flight Booking", () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain("Flight Booking");
  });

  it("should have source input", () => {
    source.value = "BLR";
    source.dispatchEvent(new Event("input"));
    expect(source.value).toBe("BLR");
  });

  it("should have destination input", () => {
    destination.value = "DEL";
    destination.dispatchEvent(new Event("input"));
    expect(destination.value).toBe("DEL");
  });

  it("should have when input", () => {
    when.value = "2021-02-01";
    when.dispatchEvent(new Event("input"));
    expect(when.value).toBe("2021-02-01");
  });

  it("should search flight BLR to DEL", fakeAsync(() => {
    fixture.detectChanges();
    source.value = "BLR";
    source.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    destination.value = "DEL";
    destination.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    when.value = "2021-02-01";
    when.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    searchBtn = fixture.nativeElement.querySelector("button#search_flights");
    searchBtn.click();
    fixture.detectChanges();

    booknowBtn = fixture.nativeElement.querySelector("#booknow_btn");
    booknowBtn.click();
    fixture.detectChanges();

    confirmBookingBtn = fixture.nativeElement.querySelector(
      "#confirm_booking_btn"
    );
    confirmBookingBtn.click();
    fixture.detectChanges();
  }));
});
