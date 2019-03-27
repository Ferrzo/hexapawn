import { Component, OnInit } from '@angular/core';
import { ChessboardDataService } from './services/chessboard-data.service';
import { ISquareInfo } from '../core/definitions/square-info';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {
  chessboard: ISquareInfo[] = [];
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private chessboardDataService: ChessboardDataService) { }

  ngOnInit() {
    this.chessboard = this.chessboardDataService.getInitialLayout();
  }

}
