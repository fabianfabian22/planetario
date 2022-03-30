import { Component, OnInit } from '@angular/core';
import { ApodService } from './apod.service';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.scss']
})
export class ConstellationComponent implements OnInit {

  constructor( private service : ApodService ) { }

  ngOnInit(): void {
    this.service.getApod().subscribe(data=> console.log(data))
  }

}
