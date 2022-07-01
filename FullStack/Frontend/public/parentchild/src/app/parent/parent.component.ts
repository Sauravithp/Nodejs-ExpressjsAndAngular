import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentx=5;
  parentY=5;
  parentZ!:number;

  constructor() { }

  ngOnInit(): void {
  }

  updateZ(parentz:number):void{
    this.parentZ=parentz;
  }

}
