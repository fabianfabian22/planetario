import { Component, Input, OnInit } from '@angular/core';
import { Apod } from '../../shared/models/apod.model';

@Component({
  selector: 'app-item-apod',
  templateUrl: './item-apod.component.html',
  styleUrls: ['./item-apod.component.scss']
})
export class ItemApodComponent implements OnInit {
  //@Input() item :  Apod ;

  ngOnInit(): void {
  }

}
