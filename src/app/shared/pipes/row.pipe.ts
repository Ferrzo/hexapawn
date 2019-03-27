import { Pipe, PipeTransform } from '@angular/core';
import { ISquareInfo } from 'src/app/core/definitions/square-info';

@Pipe({
  name: 'rowpipe'
})
export class RowPipe implements PipeTransform {

  transform(values: ISquareInfo[], row: number): any {
    return values.filter(val => val.position[1] === row);
  }

}
