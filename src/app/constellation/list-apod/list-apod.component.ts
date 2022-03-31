import { Component, Input, OnInit } from '@angular/core';
import { Apod } from '../../shared/models/apod.model';

@Component({
  selector: 'app-list-apod',
  templateUrl: './list-apod.component.html',
  styleUrls: ['./list-apod.component.scss']
})
export class ListApodComponent implements OnInit {
  @Input() data: Apod[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
