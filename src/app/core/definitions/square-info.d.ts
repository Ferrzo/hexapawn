import { SquareOwn } from '../enums/square-own';

export interface ISquareInfo {
  position: [number, number];
  ocuppied: SquareOwn;
}
