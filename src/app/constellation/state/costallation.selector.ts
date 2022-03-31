import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CostallationState } from "./costallation.reducers";


export const getCostalationFeatureState = createFeatureSelector<CostallationState>('apods');

export const getList = createSelector(
 getCostalationFeatureState,
  state => {
  return state.list }
);

export const selectAllItemsLength= createSelector(
 getCostalationFeatureState,
  state => {
     return state.list.length; }
);

export const  isLoading = createSelector(
 getCostalationFeatureState,
  state => state.loading
);

export const  getError = createSelector(
 getCostalationFeatureState,
  state => state.error
);


