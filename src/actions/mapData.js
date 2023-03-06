export const GET_ROUTE = 'GET_ROUTE';
export const GET_ROUTE_SUCCESS = 'GET_ROUTE_SUCCESS';

export const getRoute = (navigate) => ({
  type: GET_ROUTE,
  navigate,
});

export const getRouteSuccess = (data, navigate) => ({
  type: GET_ROUTE_SUCCESS,
  data,
  navigate,
});
