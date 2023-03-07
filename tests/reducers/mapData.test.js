import reducer, {initialState} from 'src/reducers/mapData'
import  {
    getRoute,
    getRouteSuccess
    } from 'src/actions/mapData'

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
            it('should handle GET_ROUTE_SUCCESS action', () => {
                const mockData = 
                { arrayResponse :[ { category: 'Nature', features: [ [Object], [Object], [Object] ] } ]}
                const action = getRouteSuccess(mockData);
                const stateAfterAction = reducer(initialState, action);
    
                expect(stateAfterAction.pointCoords.data.features).toEqual(mockData.arrayResponse);
                expect(stateAfterAction.status.isLoading).toBe(false);
                expect(stateAfterAction.status.isMapGenerated).toBe(true);
            });
        });
    
    });
    
    