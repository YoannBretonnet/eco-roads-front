import reducer, {initialState} from 'src/reducers/authentification'
import  {openCloseConnectionModal} from 'src/actions/authentification'

describe('reducer for authentification', () => {

});

describe('structure', () => {
    it('should be a function', () => {
        expect(typeof reducer).toBe('function')
    });
    it('should return an object', () => {
        expect(typeof reducer()).toBe('object')
    });
});

describe('execution', () => {
    it('should return the initial state when called without arguments', () => {
        expect(reducer()).toEqual(initialState)
    });
    it('should handle OPEN_CLOSE_CONNECTION_MODAL action', () => {
        const action = openCloseConnectionModal();
        const stateAfterAction = reducer(initialState, action);
        expect(stateAfterAction.connectionModal.isError).toBe(false);
        expect(stateAfterAction.connectionModal.isOpen).toBe(!initialState.connectionModal.isOpen);
    })
});