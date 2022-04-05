import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as  selectorCostallation from '../state/costallation.selector';
@Component({
  selector: 'app-detail-apod',
  templateUrl: './detail-apod.component.html',
  styleUrls: ['./detail-apod.component.scss']
})
export class DetailApodComponent implements OnInit {
  sub: any;
  apod$: any[] | undefined;

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.store.select(selectorCostallation.getList).subscribe(
        response => {

          this.apod$ = response.filter(data => data['date'] === params['date']);

        }
      );
    });

  }



}
