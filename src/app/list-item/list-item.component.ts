import { 
  Component,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  Input
   } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  animations: [
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        state('out', style({transform: 'translateX(0)'})),
        transition('void => in', [
          animate(1000, keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
        transition('in=>out', [
          animate(700, keyframes([
            style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
            style({opacity: 1, transform: 'translateX(-15px)', offset: 0.5}),
            style({opacity: 0, transform: 'translateX(100%)',  offset: 0.7})
          ]))
        ])
    ])
  ]
})
export class ListItemComponent{
	show;
  @Input('show') set showReceive(show){
    this.show=show;
  }
	@Input('clear') set clearReceive(clear){
		(clear)?this.anmt="out":this.anmt="in";
	}
  anmt;
  constructor() { }


}
