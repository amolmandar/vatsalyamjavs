//import { MatDialog } from '@angular/material/';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../shared/services/database.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { PdfviewerComponent } from '../pdfviewer/pdfviewer.component';

@Component({
  selector: 'loginform',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resData:JSON[];
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private databaseService:DatabaseService,
    private formBuilder: FormBuilder,private dialog:MatDialog) { 
      this.resData=JSON.parse(sessionStorage.getItem('data'));
      console.log(sessionStorage.getItem('data'));
    }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
      
    });
    this.resData=[];
     /* this.databaseService.getDonor(this.loginForm.value).subscribe(
        (data)=>{
              this.resData=data;
              //this.databaseService.setData(this.resData);
      }); */ 
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data ={'name':this.name,'email':this.email}
    dialogConfig.width="400px"
    dialogConfig.height="700px"
    this.dialog.open(PdfviewerComponent, dialogConfig);
    console.log("sdsds");
    //console.log(dialogConfig.data.name);
    //console.log(this.name);
}

name:any;
email:any;
  getout(){
    sessionStorage.clear();
    this.len=0;
    this.resData=[]
    //console.log(this.resData);
  }
  len=0;
  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.databaseService.getDonor(this.loginForm.value).subscribe(
      (data)=>{
        //console.log('data collected ...');
        //console.log(data[0].name);
        this.resData=data;
        sessionStorage.setItem('data',JSON.stringify(this.resData));
        //this.databaseService.setData(this.resData);
        this.len=this.resData.length;
        //this.name=JSON.parse(this.resData);//
        //this.name=this.name.name;
        //this.email=this.resData[0]['email'];
        //Object.keys(this.resData).forEach(key=>{
          console.log('collecting keys...')
          this.email=data[0].email;
          this.name=data[0].name;
          this.openDialog();
        //});
        
      });
      //this.name= this.loginForm.value.name;
      //this.email= this.loginForm.value.email;
      //this.openDialog();
    //console.log(this.loginForm.value);
    //console.log(this.loginForm.value.email);
    
  }



  


}
