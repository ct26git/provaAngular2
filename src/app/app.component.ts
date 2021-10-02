import { Component } from '@angular/core';


//componente base che lancia altri componenti
@Component({
  selector: 'home',
  templateUrl: './pag_init/home.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
