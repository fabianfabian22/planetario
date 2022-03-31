import { createAction, props } from '@ngrx/store';
import { Apod } from 'src/app/shared/models/apod.model';



export const loadCostallation = createAction('[COSTALLATION]  load  APOD ');

export const getItemsComplete = createAction(
  `[ COSTALLATION]  getItemsComplete`,
  props<{ apods: any[] }>()
);

export const CostallationFetchSuccessful =  createAction(
    '[ COSTALLATION ]  Loaded success COSTALLATION',
     props<{ apods: Apod[ ] }>()
);

export const fetchError = createAction(
    '[ COSTALLATION ]  load error COSTALLATION ',
    props<{ error: string }>()
);
