import { Actions, createEffect, ofType } from "@ngrx/effects";


import { Injectable } from "@angular/core";
import { map, catchError, switchMap,tap,  } from "rxjs/operators";
import * as actionsCostallation from './costallation.actions';
import {  of  } from "rxjs";
import { Apod } from '../../shared/models/apod.model';
import { ApodService } from "../apod.service";


@Injectable()
export class CostallationEffects {

  constructor(private actions$: Actions,
    private service: ApodService) { }

  apod$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actionsCostallation.loadCostallation),

      switchMap(() => this.service.getApod()
        .pipe(
          tap(() => console.log),
          map(apod => actionsCostallation.CostallationFetchSuccessful({ apods: apod })),

          catchError(error => of(actionsCostallation.fetchError({ error })))
        ))
    )
  })


}
