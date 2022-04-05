import { Component, Input, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-item-apod',
  templateUrl: './item-apod.component.html',
  styleUrls: ['./item-apod.component.scss']
})
export class ItemApodComponent implements OnInit {
  @Input() info: any | undefined = [];
  info_url_video = '';

  constructor(private route: Router) {

  }

  ngOnInit(): void {

    if (this.info['media_type'] === 'video')
     { this.info_url_video = this.clearUrl(this.info.url) }
  }

  clearUrl(url: string) {
    let part = url.split("?");
    return String(part[0]);
  }

}

