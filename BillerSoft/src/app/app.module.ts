import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material'
import { HttpModule} from '@angular/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { CPanelComponent } from './c-panel/c-panel.component';
import { BillComponent } from './bill/bill.component'
import { from } from 'rxjs';
import { CpanelConnectionsService } from './service/cpanel-connections.service';
@NgModule({
  declarations: [
    AppComponent,
    CPanelComponent,
    BillComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [CpanelConnectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
