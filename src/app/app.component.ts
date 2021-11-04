import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sports: any[] = [
    { name: 'Los Angeles Kings', type: 'hockey' },
    { name: 'Anaheim Ducks', type: 'hockey' },
    { name: 'Los Angeles Dodgers', type: 'basball' },
    { name: 'Los Angeles Angels of Anaheim', type: 'basball' },
    { name: 'San Diego Padres', type: 'basball' },
  ];
  constructor() {}

  ngOnInit() {}
}
