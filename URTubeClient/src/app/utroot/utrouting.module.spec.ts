import { UTRoutingModule } from './utrouting.module';

describe('UTRoutingModule', () => {
  let uTRoutingModule: UTRoutingModule;

  beforeEach(() => {
    uTRoutingModule = new UTRoutingModule();
  });

  it('should create an instance', () => {
    expect(uTRoutingModule).toBeTruthy();
  });
});
