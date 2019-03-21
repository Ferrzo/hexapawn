import { Component, OnInit, Input } from '@angular/core';
import { ISquareInfo } from 'src/app/core/definitions/square-info';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() squareInfo: ISquareInfo;
  // TODO: Selection, Action
  constructor() { }

  ngOnInit() {
  }

}
