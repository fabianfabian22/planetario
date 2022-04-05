import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  public transform(value: string): SafeResourceUrl {
    console.log('value: ', value);

    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
