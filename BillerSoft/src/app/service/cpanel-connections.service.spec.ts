import { TestBed } from '@angular/core/testing';

import { CpanelConnectionsService } from './cpanel-connections.service';

describe('CpanelConnectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpanelConnectionsService = TestBed.get(CpanelConnectionsService);
    expect(service).toBeTruthy();
  });
});
