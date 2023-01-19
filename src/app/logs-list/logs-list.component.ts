import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logs } from '../logs';
import { LogsService } from '../logs.service';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit{

  deleteMessage: string = '';
  p : number = 1;
  count : number = 0;
  tableSize : number = 10;
  tableSizes: any = [5,10,15,20];
  emriKlinikes: any;
  logList: any[] = [];
  logListTemp: any[] = [];

  constructor(private logs: LogsService, private http: HttpClient ) {
    // this.logs.getLog().subscribe((data: any) => {
    //   this.logsList = data; } 
  }

  @Input() set logListInput(logList: any) {
    this.logList = logList;
    this.logListTemp = logList;
  }

  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();


  ngOnInit(): void {
    
  }

  deleteLogs(id: string) {  
    this.onDelete.emit(id);
  }

  editLog(id: string) {
    this.logs.getLogById(id).subscribe((data: any) => {
      this.onEdit.emit(data);
    })
  } 

  // Search() { 
  //   if(this.emriKlinikes=="") { 
  //     this.ngOnInit();
  //   } else { 
  //     this.logs = this.logs.filter(res=> { 
  //       return res.emriKlinikes.toLocaleLowerCase().match(this.emriKlinikes.toLocaleLowerCase());
  //     })
  //   }
  // }

  key = 'id'; 
  reverse: boolean = false;
  sort(key: string) { 
    this.key = key;
    this.reverse = !this.reverse;
  }

  // search() {
  //   this.logList = this.logListTemp.filter((item: any)=>{
  //     return item.emriKlinikes.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1 || !this.searchText;
  //   })
  // }


  searchText='';
  
  filterByDate(date:any){ 
    console.log(date.value);
     if(!date.value) return null;
     if(!date) return date;

     date.value = date.value.toLowerCase()

      this.logList = this.logListTemp.filter((item: any)=>{ 
         return item.date == date.value;
       }) 

      // this.logList.filter=this.filterByDate.trim().toLocaleLowerCase;
  }

  reset(table: any) { 
    this.logList = this.logList.filter((item: any)=> {
      if(this.filterByDate == null){ 
        this.reset(this.logList);
      }
    })
  }

}

