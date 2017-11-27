import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseTitle2'
})
export class CaseTitle2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
