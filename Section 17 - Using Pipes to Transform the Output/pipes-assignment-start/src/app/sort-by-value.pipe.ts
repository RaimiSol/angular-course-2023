import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByValue',
  pure: false
})
export class SortByValuePipe implements PipeTransform {

  transform(servers: {
    instanceType: string,
    name: string,
    status: string,
    started: Date }[], key: 'instanceType'|'name'|'status'|'started' ): {
    instanceType: string,
    name: string,
    status: string,
    started: Date }[] {
    servers.sort((a, b) => {
      if (a[key] > b[key]) {
        return -1;
      } else if (a[key] < b[key]) {
        return 1;
      } else {
        return 0;
      }
    });
    return servers;
  }

}
