import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData: string = '';

  updateData(event: Event): void {
    this.parentData = (event.target as HTMLInputElement).value;
  }


  name:any[]=[]
  resiveData(event:any)
  {
   this.name.push(event)
  }
}
