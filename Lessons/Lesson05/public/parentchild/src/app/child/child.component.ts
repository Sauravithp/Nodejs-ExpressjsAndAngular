import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childX!:number;

  @Input()
  childY!:number;

  childZ!:number;

  @Output()
  addEvent:EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd():void{
    this.childZ=this.childX+this.childY;
    this.childX=0;
    this.childY=0;
    this.addEvent.emit(this.childZ);
  }
}
