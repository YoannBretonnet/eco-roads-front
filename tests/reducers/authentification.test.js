import reducer, {initialState} from 'src/reducers/authentification'
import  {openCloseConnectionModal, 
    changeInputValue, 
    submitLogin, 
    submitLoginSuccess,
    submitLoginFailure,
    submitDeconnexion,
    openMenu
    } from 'src/actions/authentification'

describe('reducer for authentification', () => {

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
        });

        it('should handle CHANGE_INPUT_VALUE', () => {
            const action = changeInputValue ('john@test.com', 'email', 'connectionModal');
            const stateAfterAction = reducer(initialState, action);

            expect(stateAfterAction.connectionModal.email).toBe('john@test.com');
        });

        it('should handle SUBMIT_LOGIN', () => {
            const action = submitLogin();
            const stateAfterAction = reducer(initialState, action);

            expect(stateAfterAction.connectionModal.isLoading).toBe(true);
        });

        it('should handle SUBMIT_LOGIN_SUCCESS', () => {
            const action = submitLoginSuccess('johnny');
            const stateAfterAction = reducer(initialState, action);

            expect(stateAfterAction.connectionModal.isConnected).toBe(true);
            expect(stateAfterAction.connectionModal.isOpen).toBe(false);
            expect(stateAfterAction.connectionModal.isLoading).toBe(false);
            expect(stateAfterAction.connectionModal.isError).toBe(false);
            expect(stateAfterAction.connectionModal.nickname).toBe('johnny');
        });

        it('should handle SUBMIT_LOGIN_FAILURE', () => {
            const action = submitLoginFailure();
            const stateAfterAction = reducer(initialState, action);

            expect(stateAfterAction.connectionModal.isOpen).toBe(false);
            expect(stateAfterAction.connectionModal.isLoading).toBe(false);
            expect(stateAfterAction.connectionModal.isError).toBe(true);
        });

        it('should handle SUBMIT_DECONNEXION', () => {
            const action = submitDeconnexion();
            const stateAfterAction = reducer(initialState, action);

            expect(stateAfterAction.connectionModal.isConnected).toBe(false);
            expect(stateAfterAction.connectionModal.isOpen).toBe(false);
            expect(stateAfterAction.connectionModal.isLoading).toBe(false);
            expect(stateAfterAction.openMenu.isOpen).toBe(false);
        });

        it('should handle OPEN_MENU', () => {
            const action = openMenu();
            const stateAfterAction = reducer(initialState, action);

            expect(stateAfterAction.openMenu.isOpen).toBe(!initialState.openMenu.isOpen);
        });
    });

});

