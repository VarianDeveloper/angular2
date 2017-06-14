import { Component, Input } from '@angular/core'
@Component({
    selector: 'events-thumbnail',
    template: `
        <div class="well hoverwell thimbname">
            <h2>{{event.name}}</h2>
            <div>Location: {{event.location.city}}/{{event.location.country}}</div>
        </div>
    `
})
export class EventsThumbnailComponent {
    @Input() event:any
}