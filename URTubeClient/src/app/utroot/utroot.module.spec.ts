import { UTRootModule } from './utroot.module';

describe('UTRootModule', () => {
  let uTRootModule: UTRootModule;

  beforeEach(() => {
    uTRootModule = new UTRootModule();
  });

  it('should create an instance', () => {
    expect(uTRootModule).toBeTruthy();
  });
});
