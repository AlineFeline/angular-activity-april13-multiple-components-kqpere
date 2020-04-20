import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
name: string = 'TECHNOLOGY NOW';
header: string = '10 technology trends that will impact our lives in 2020';
}