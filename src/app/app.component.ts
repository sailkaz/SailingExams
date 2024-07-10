import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'se-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sailingExams';

  constructor(private httpService: HttpService) {

  }

  logout() {
    this.httpService.logout();
  }
}
