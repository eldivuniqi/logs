import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logs } from './logs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  url='http://localhost:3000/logs';
  filter: any;

  // http://localhost:3000/logs/id, {}
  constructor(private http: HttpClient) { }

  getLog(){
    return this.http.get(this.url);               
  }

  saveLogsData(logs: any) { 
    console.log(logs);
    console.log(this.http.post(this.url, logs));
    // return true;
    return this.http.post(this.url, logs)
  }

  delete(id: string) { 
    return this.http.delete<Logs[]>('http://localhost:3000/logs/'+id);
  }

  getLogById(id: string){
    return this.http.get(`${this.url}/${id}`);               
  }

  editLog(log: any) {
    return this.http.put(this.url + "/" + log.id, log)
  }

}
