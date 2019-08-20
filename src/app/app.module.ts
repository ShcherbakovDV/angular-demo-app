import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { TendersGridComponent } from './tenders-grid/tenders-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TendersGridComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
