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

  constructor(private chessboardDataService: ChessboardDataService) { }

  ngOnInit() {
    this.chessboard = this.chessboardDataService.getInitialLayout();
  }

}
