import reducer, {initialState} from 'src/reducers/mapSettings'
import  {
    openCloseLocalisationModal,
    openCloseCarModal,
    openCloseInterestPointModal,
    changeMapSettingInputValue,
    updateListOfLocalisation,
    updateListOfLocalisationSuccess,
    updateListOfLocalisationFail,
    selectInterestPointDelete,
    selectInterestPointAdd
    } from 'src/actions/mapSettings'

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
            it('should handle UPDATE_LIST_OF_LOCALISATION action', () => {
                const action = updateListOfLocalisation('Paris','DepartSelected','isDepartLoading', 'DepartProposition');
                const stateAfterAction = reducer(initialState, action);
                
                expect(stateAfterAction.localisationSettingsModal.isDepartLoading).toBe(true)
                expect(stateAfterAction.localisationSettingsModal.DepartSelected.label).toBe('Paris');
            });
            it('should handle UPDATE_LIST_OF_LOCALISATION_SUCCESS action', () => {
                const mockData =  { features: [ [Object], [Object], [Object]  ]}
                const action = updateListOfLocalisationSuccess(mockData, 'DepartProposition', 'isDepartLoading');
                const stateAfterAction = reducer(initialState, action);
                
                expect(stateAfterAction.localisationSettingsModal.isDepartLoading).toBe(false)
                expect(stateAfterAction.localisationSettingsModal.DepartProposition).toEqual(mockData.features);
            });
            it('should handle UPDATE_LIST_OF_LOCALISATION_FAIL action', () => {
                const action = updateListOfLocalisationFail('DepartProposition', 'isDepartLoading');
                const stateAfterAction = reducer(initialState, action);
                
    isDepartLoading: false,
                expect(stateAfterAction.localisationSettingsModal.isDepartLoading).toBe(false);
                expect(stateAfterAction.localisationSettingsModal.DepartProposition).toEqual([]);
            });
            it('SELECT_INTEREST_POINT_ADD action', () => {
                const action = selectInterestPointAdd('nature');
                const stateAfterAction = reducer(initialState, action);
                
                expect(stateAfterAction.interestPointModal.selected).toEqual(['nature']);
            });
        });
    
    });
    