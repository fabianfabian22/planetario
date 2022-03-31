import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actionsCostallation from './state/costallation.actions';
import * as  selectorCostallation from './state/costallation.selector';
@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.scss']
})
export class ConstellationComponent implements OnInit {

  apod$: any | undefined;
  constructor( private store: Store<any> ) { }

  ngOnInit(): void {
    this.store.dispatch(actionsCostallation.loadCostallation());
    this.store.select(selectorCostallation.getList).subscribe(
      response => {
        this.apod$ = response;
      }
    );
  }

}
