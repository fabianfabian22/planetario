import * as actionsCostallation from "./costallation.actions";
import { createReducer, on } from "@ngrx/store";

export const initialState = {
  loading: false,
  list: [],
  error: ''
};

export interface CostallationState {
  loading: boolean;
  list: any[];
  error: string | undefined;
}

export interface FeatureCostallation {
  apods: CostallationState;
  loading: boolean;
}

export const CostallationReducer = createReducer<CostallationState>(
  initialState,

  on(actionsCostallation.loadCostallation, (state): CostallationState => {
    return ({ ...state, loading: true });
  }),

  on(actionsCostallation.getItemsComplete, (state, action): CostallationState=> {
  return ({ ...state, loading: true });
  }),


  on(actionsCostallation.CostallationFetchSuccessful, (state, action): CostallationState => {
    return { ...state, list: action.apods, loading: false };
  }),


 on(actionsCostallation.fetchError, (state, action): CostallationState => {
    return { ...state, error: action.error, loading: false };
 }),

)
