import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trainName = "Nagpur Pune Express [12120]";
  AvailTicket = 100;

  BookTicket(){
 if(this.AvailTicket !=1){
  this.AvailTicket--;
  this.AvailTicket=this.AvailTicket;
  console.log(this.AvailTicket)
 }
    
  }
  
  CancelTicket(){
    if(this.AvailTicket !=100){
      this.AvailTicket++;
      this.AvailTicket=this.AvailTicket;
      console.log(this.AvailTicket)
    }
  }
}

