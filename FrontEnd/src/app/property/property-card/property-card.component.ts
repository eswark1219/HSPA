import { Component, Input } from "@angular/core";
import { IProperty } from '../IProperty.Interface';

@Component({
selector:'app-propety-card',
//template:`<h1>I am a Card</h1>`,
templateUrl:'Property-Card.Component.html',
//styles:['h1 {font-weight:normal }']
styleUrls:['property-card.component.css']
})

export class PropertyCardComponent {

  @Input()property:IProperty

}
