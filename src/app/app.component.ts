import { Component } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CarduserComponent } from './carduser/carduser.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github users';
}
