import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderformat'
})
export class GenderformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==1)
    return "Male"
    else if(value==0)
    return "Female"
    else
    return value
  }

}
