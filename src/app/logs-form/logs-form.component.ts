import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { LogsService } from '../logs.service';
import { DatePipe } from '@angular/common';
import { LogsListComponent } from '../logs-list/logs-list.component';
import { TitleStrategy } from '@angular/router';


@Component({
  selector: 'app-logs-form',
  templateUrl: './logs-form.component.html',
  styleUrls: ['./logs-form.component.css'],
  providers: [DatePipe]
})
export class LogsFormComponent implements OnInit {

  isEditing: boolean = false;
  date: Date = new Date()
  addLog = this.fb.group({
    id: new FormControl(''),
    emriKlinikes: ['', Validators.required ], 
    kerkesa: ['', Validators.required ], 
    // dateToday: new FormControl(this.datePipe.transform(Date.now(), 'dd-MM-yyyy hh:mm:ss'))
    date: [Date]
  });

//new Date()

  @Output() newItem: any = new EventEmitter();
  @Output() onEdited: any = new EventEmitter();
  @Input() deleteMessage: string = "";

  @Input() set log(log: any) {
    if(log) {
      this.isEditing = true;
      this.addLog.setValue({
        id: log.id,
        emriKlinikes: log.emriKlinikes,
        kerkesa: log.kerkesa,
        // dateToday: log.dateToday
        date: log.date
      })
      console.log(log.date)
    }
  }

  constructor(private logs: LogsService, private datePipe: DatePipe, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  successMessage: string= '';
  editMessage: string= '';

  
  SaveData() {
    console.log("vlera formes",this.addLog.value);
    if(!this.isEditing) {
      this.logs.saveLogsData(this.addLog.value).subscribe((result) => {
        this.newItem.emit(result);
        console.log(result);
        this.successMessage = 'Kerkesa u ruajt me sukses!';
        this.addLog.reset();
        setTimeout(() => {
          this.successMessage = '';
        }, 2000);
  
      })
    } else {
      
         this.logs.editLog(this.addLog.value).subscribe((result: any)=> {
         this.onEdited.emit();
         this.addLog.reset();
         this.editMessage = 'Kerkesa u ndryshua me sukses!';

         setTimeout(() => {
          this.editMessage = '';
        }, 2000);

        })
    }
  }
}

