import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsListComponent } from "./logs-list/logs-list.component";
import { LogsFormComponent } from './logs-form/logs-form.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
    declarations: [
        AppComponent,
        LogsListComponent,
        LogsFormComponent,
        FilterPipe,
        SearchPipe,
      
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxPaginationModule,
        MatPaginatorModule,
        Ng2OrderModule,
        Ng2SearchPipeModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppModule { }
