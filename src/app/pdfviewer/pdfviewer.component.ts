import { Component, OnInit,Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PdfviewerComponent>,
    @Inject(MAT_DIALOG_DATA) public  data) { }

  ngOnInit(): void {
    //this.dialogRef.updatePosition=
    console.log('from pdf:'+this.data[0]);
  }
  
close(){
  this.dialogRef.close();
}
}
