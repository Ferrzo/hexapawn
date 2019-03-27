import { Component, OnInit, Input } from '@angular/core';
import { ISquareInfo } from 'src/app/core/definitions/square-info';
import { SquareOwn } from 'src/app/core/enums/square-own';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() squareInfo: ISquareInfo;
  squareOwn: SquareOwn = null ;
  isSelected = false;
  // TODO: Selection, Action
  constructor() { }

  ngOnInit() {
  }

  select(): void {
    this.isSelected = !this.isSelected;
  }



}
