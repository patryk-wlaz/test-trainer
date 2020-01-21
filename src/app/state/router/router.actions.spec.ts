import * as routerActions from './router.actions';

describe('Store', () => {
  describe('Router', () => {
    describe('Actions', () => {
      describe('Go', () => {
        it('should create an action', () => {
          const payload = {
            path: ['test/test'],
          };
          const action = new routerActions.Go(payload);

          expect({ ...action }).toEqual({
            type: routerActions.GO,
            payload,
          });
        });
      });
      describe('Back', () => {
        it('should create an action', () => {
          const action = new routerActions.Back();

          expect({ ...action }).toEqual({
            type: routerActions.BACK,
            payload: undefined,
          });
        });
      });
      describe('Forward', () => {
        it('should create an action', () => {
          const action = new routerActions.Forward();

          expect({ ...action }).toEqual({
            type: routerActions.FORWARD,
            payload: undefined,
          });
        });
      });
    });
  });
});
