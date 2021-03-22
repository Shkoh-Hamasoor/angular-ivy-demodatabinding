import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Hello World";
  isSpecial: boolean = true;
  redColor = "green";
  username = "";
  imageURL =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=768:*";
  message: string = "";
  onClick(msg: string): void {
    this.message = msg;
  }
}
