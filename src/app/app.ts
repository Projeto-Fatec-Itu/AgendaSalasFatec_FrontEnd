import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
})
export class App {
  days = 0;
  months = 0;

  carregar(){
    if(this.days === this.months){
      console.warn("Ola");
    }
  }
}
