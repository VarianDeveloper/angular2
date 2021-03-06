import { Component } from '@angular/core'
@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr/>
      <events-thumbnail [event]="event1"></events-thumbnail>
    </div>
  `
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    time: '10:00am',
    price: 599.99,
    imageUrl: 'app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}