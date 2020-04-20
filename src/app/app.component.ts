/* 
The purpose of this lab is to create multiple components and display them on a page

For this activity you are going to create a webpage that has the following containers:
header
navigation
body
footer
1. Create a component and its template for each of the containers listed above.
2. Each component should have a property with its title
3. Each template should include a div with a different background colour and through interpolation should display the title. 
*/

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
  <p> {{name}} <p> 
  </div>
<app-header></app-header>
<app-navigation> </app-navigation>
<app-bodies></app-bodies>
<app-footer></app-footer>
  `
})

export class AppComponent  {
  
}

