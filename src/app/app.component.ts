import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
                <h1>{{pageTitle}}</h1>
                <div>Some Component will be here maybe </div>
                <pm-products></pm-products>
            </div>`
})

export class AppComponent {
  pageTitle: string = "Acme Product Manager";
}