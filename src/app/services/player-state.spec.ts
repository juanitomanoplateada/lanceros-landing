import { TestBed } from '@angular/core/testing';

import { PlayerState } from './player-state';

describe('PlayerState', () => {
  let service: PlayerState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
