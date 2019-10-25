import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular 5";
  selectedCountry: any;

  cities = {};

  countries = [
    {
      id: 1,
      name: "France",
      cities: ["Paris", "Marseille", "Nice"]
    },
    {
      id: 2,
      name: "Germany",
      cities: ["Hamburg", "Berlin", "Munich"]
    },
    {
      id: 3,
      name: "Italy",
      cities: ["Roma", "Milan", "Napoli"]
    }
  ];

  ngOnInit() {
    this.cities = this.countries.filter(x => x.id == 1)[0].cities;
  }

  onChange(deviceValue) {
    console.log(
      "Changed Value is ",
      deviceValue,
      "name",
      this.countries[deviceValue].name
    );
    this.cities = this.countries.filter(x => x.id == deviceValue)[0].cities;
  }
}
