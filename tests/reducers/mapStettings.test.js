import reducer, {initialState} from 'src/reducers/mapSettings'
import  {
    openCloseLocalisationModal,
    openCloseCarModal,
    openCloseInterestPointModal,
    changeMapSettingInputValue,
    updateListOfLocalisation,
    updateListOfLocalisationSuccess,
    updateListOfLocalisationFail,
    changeMapSettingAutocompleteValue,
    updateListOfLocalisationAbort,
    selectInterestPoint,
    selectInterestPointDelete,
    selectInterestPointAdd,
    clearMapSettings,
    } from 'src/actions/mapSetings'

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
    
            it('should handle GET_ROUTE action', () => {
                const action = getRoute();
                const stateAfterAction = reducer(initialState, action);
    
                expect(stateAfterAction.status.isLoading).toBe(true);
                expect(stateAfterAction.status.error.isError).toBe(false);
            });
            it('should handle OPEN_CLOSE_CAR_MODAL action', () => {
                const action = openCloseCarModal();
                const stateAfterAction = reducer(initialState, action);
    
                expect(stateAfterAction.carSettingsModal.isOpen).toBe(!initialState.carSettingsModal.isOpen)
            });
            it('should handle OPEN_CLOSE_LOCALISATION_MODAL action', () => {
                const action = openCloseLocalisationModal();
                const stateAfterAction = reducer(initialState, action);
    
                expect(stateAfterAction.localisationSettingsModal.isOpen).toBe(!initialState.localisationSettingsModal.isOpen)
            });
            it('should handle OPEN_CLOSE_INTEREST_POINT_MODAL action', () => {
                const action = openCloseInterestPointModal();
                const stateAfterAction = reducer(initialState, action);
    
                expect(stateAfterAction.interestPointModal.isOpen).toBe(!initialState.interestPointModal.isOpen)
            });
            it('should handle CHANGE_MAP_SETTING_INPUT_VALUE action', () => {
                const action = changeMapSettingInputValue('Tesla','brandsValue','carSettingsModal');
                const stateAfterAction = reducer(initialState, action);
    
                expect(stateAfterAction.carSettingsModal.brandsValue).toBe('Tesla');
            });
        });
    
    });
    
    