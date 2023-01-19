import { Pipe, PipeTransform } from '@angular/core';
import { LogsService } from './logs.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  logsList: any[] =[];

  constructor(private logs: LogsService) {
    this.logs.getLog().subscribe((data: any) => {
      this.logsList = data;
    })
  }


  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();

    return this.logsList.filter((item: any)=>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
