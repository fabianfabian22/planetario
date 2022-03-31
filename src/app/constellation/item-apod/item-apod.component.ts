import { Component, Input, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-item-apod',
  templateUrl: './item-apod.component.html',
  styleUrls: ['./item-apod.component.scss']
})
export class ItemApodComponent implements OnInit {
  @Input() info: any | undefined;
  info_url_video= '';;

  ngOnInit(): void {

    if (this.info.media_type == 'video')
    { this.info_url_video = this.clearUrl(this.info.url) }


  }
  clearUrl(url: string) {
    let part = url.split("?");
    return String(part[0]);
  }


}





@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
