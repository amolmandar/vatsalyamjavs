import { MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ContentService } from './shared/services/content.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PageComponent } from './page/page.component';
import { ValuesPipe } from './values.pipe';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { VatsalyamYearDataComponent } from './vatsalyam-year-data/vatsalyam-year-data.component';
import { DatabaseService } from './shared/services/database.service';
import {MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {MatDialogModule} from "@angular/material/dialog";
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ValuesPipe,
    VatsalyamYearDataComponent,
    LoginComponent,
    PdfviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSliderModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxExtendedPdfViewerModule,
    MatDialogModule
   
  ],
  providers: [ContentService,DatabaseService],

  bootstrap: [AppComponent]
})
export class AppModule { }
