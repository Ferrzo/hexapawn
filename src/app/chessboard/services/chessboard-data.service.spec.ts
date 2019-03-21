import { TestBed } from '@angular/core/testing';

import { ChessboardDataService } from './chessboard-data.service';

describe('ChessboardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChessboardDataService = TestBed.get(ChessboardDataService);
    expect(service).toBeTruthy();
  });
});
