import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentX:number=7;

  parentY:number=8;

  parentZ!:number;

  constructor() { }

  ngOnInit(): void {
  }

  udapteZ(zValue:number):void{
      this.parentZ=zValue;
}

}
