import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular 5";
   
  selected: any;
  cities = {};

  countries = [
    {
      id: 1,
      name: "Sri lanka"
    },
    {
      id: 2,
      name: "India"
    },

    {
      id: 3,
      name: "Japan"
    }
  ];

  ngOnInit() {
 
  }

  onChange(deviceValue) {
    console.log(
      "Changed Value is ",
      deviceValue,
      "name",
      this.countries[deviceValue].name
    );
    this.selected = this.countries[deviceValue - 1].name;
   }
}
