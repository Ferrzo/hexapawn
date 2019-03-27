import { Injectable } from '@angular/core';
import { ISquareInfo } from 'src/app/core/definitions/square-info';
import { SquareOwn } from 'src/app/core/enums/square-own';

@Injectable({
  providedIn: 'root'
})
export class ChessboardDataService {

  constructor() { }

  public getInitialLayout(): ISquareInfo[] {
    const squares: ISquareInfo[] = [];
    let id = 1;
    for (let i = 0; i < 3; i++) {
      squares.push({ocuppied: SquareOwn.blue, position: [i, 0], id: id++});
    }
    for (let i = 0; i < 3; i++) {
      squares.push({ocuppied: SquareOwn.none, position: [i, 1], id: id++});
    }
    for (let i = 0; i < 3; i++) {
      squares.push({ocuppied: SquareOwn.red, position: [i, 2], id: id++});
    }
    return squares;
  }
}
