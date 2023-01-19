import { Component, OnInit } from '@angular/core';
import { Logs } from './logs';
import { LogsService } from './logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'logs';
  logsData: any[] = [];
  deleteMessage: string = "";
  log: any;

  constructor(private logs: LogsService) {}

  ngOnInit(): void {
    this.loadLogs();
  }

  saveItem(item: any) {
    this.logsData.push(item);
  }

  loadLogs() {
    this.logs.getLog().subscribe((data: any) => {
      this.logsData=data;
    });
  }

  editLog(log: any) {
    this.log = log;
  }

  deleteLog(id: any) { 
    this.logs.delete(id).subscribe(() => {
      this.loadLogs(); 
    });

    this.deleteMessage = 'Kerkesa u fshi me sukses!'

      setTimeout(() => {
        this.deleteMessage = '';
      }, 2000);

    }

    // searchText='';
 }

