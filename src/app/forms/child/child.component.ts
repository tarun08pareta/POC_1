import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childData: string='';

  @Output() childEvent= new EventEmitter();

  newTaskAdd(value:any)
  {
   this.childEvent.emit(value)
   
  }

  constructor()
  {
    console.log('constructor call')
  }
  
  
 
  ngOnChanges(changes: SimpleChanges){
      console.log('ngOnChanges call')
      // console.log(changes['inputValue'].currentValue)
      // console.log(changes['inputValue'].previousValue)
  }
}
