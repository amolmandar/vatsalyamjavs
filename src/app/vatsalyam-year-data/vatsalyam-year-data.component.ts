import { Component, OnInit,Input} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginatorModule,MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
//import { MatChipsModule } from '@angular/material/chips';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'vatsalyam-year-data',
  templateUrl: './vatsalyam-year-data.component.html',
  styleUrls: ['./vatsalyam-year-data.component.css']
})


export class VatsalyamYearDataComponent implements OnInit, AfterViewInit {
  @Input() year:string;
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns:string[] = ['FullName','Email','Gender','JobTitle'];
  dataSource:MatTableDataSource<Employee>;
  //dataSource:MatTableDataSource<PeriodicElement>;
    //dataSource=ELEMENT_DATA;
  show=false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit(){
    //this.dataSource=ELEMENT_DATA;
    
    if(this.year=='2017')
        this.dataSource = new MatTableDataSource<Employee>(EmpData1);
    if(this.year=='2019')
        this.dataSource = new MatTableDataSource<Employee>(EmpData2);
    if(this.year=='2021')
        this.dataSource = new MatTableDataSource<Employee>(EmpData3);
    this.dataSource.paginator=this.paginator;
  }
  
   
  

  constructor() { 
    this.dataSource = new MatTableDataSource<Employee>(EmpData);
    
  }

  ngOnInit(): void {
  }

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
export interface Employee {
  Id : number,	
  FirstName:string,	
  LastName:string,	
  Email:string,
  Gender:string,	
  JobTitle:string
};
export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
};
const EmpData : Employee[] =[{
  "Id": 1,
  "FirstName": "Johannah",
  "LastName": "Kiffin",
  "Email": "jkif@google.pl",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 2,
  "FirstName": "Eldin",
  "LastName": "Astbery",
  "Email": "east@geocities.jp",
  "Gender": "M",
  "JobTitle": "Senior Editor"
}, {
  "Id": 3,
  "FirstName": "Nahum",
  "LastName": "Mounce",
  "Email": "nmounce2@vk.com",
  "Gender": "M",
  "JobTitle": "Programmer II"
}, {
  "Id": 4,
  "FirstName": "Gallard",
  "LastName": "Standell",
  "Email": "gsta3@europa.eu",
  "Gender": "M",
  "JobTitle": "Account Representative II"
}, {
  "Id": 5,
  "FirstName": "Koenraad",
  "LastName": "Domleo",
  "Email": "kdeo4@cornell.edu",
  "Gender": "M",
  "JobTitle": "Quality Control Specialist"
}, {
  "Id": 6,
  "FirstName": "Uriah",
  "LastName": "Turbat",
  "Email": "utat5@aol.com",
  "Gender": "M",
  "JobTitle": "Accounting Assistant II"
}, {
  "Id": 7,
  "FirstName": "Waldemar",
  "LastName": "Fowley",
  "Email": "wfowley6@sun.com",
  "Gender": "M",
  "JobTitle": "Account Coordinator"
}, {
  "Id": 8,
  "FirstName": "Rodolfo",
  "LastName": "Trenchard",
  "Email": "rtrenchard7@yandex.ru",
  "Gender": "M",
  "JobTitle": "Data Coordiator"
}, {
  "Id": 9,
  "FirstName": "Konstance",
  "LastName": "Dudek",
  "Email": "kdudek8@techcrunch.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 10,
  "FirstName": "Monti",
  "LastName": "Perton",
  "Email": "mperton9@youtube.com",
  "Gender": "M",
  "JobTitle": "Operator"
}];
const EmpData2 : Employee[] =[{
  "Id": 1,
  "FirstName": "Madhuri",
  "LastName": "Dixit",
  "Email": "md@dixit.org",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 2,
  "FirstName": "Eldin",
  "LastName": "Astbery",
  "Email": "east@geocities.jp",
  "Gender": "M",
  "JobTitle": "Senior Editor"
}, {
  "Id": 3,
  "FirstName": "Nahum",
  "LastName": "Mounce",
  "Email": "nmounce2@vk.com",
  "Gender": "M",
  "JobTitle": "Programmer II"
}, {
  "Id": 4,
  "FirstName": "Gallard",
  "LastName": "Standell",
  "Email": "gsta3@europa.eu",
  "Gender": "M",
  "JobTitle": "Account Representative II"
}, {
  "Id": 5,
  "FirstName": "Koenraad",
  "LastName": "Domleo",
  "Email": "kdeo4@cornell.edu",
  "Gender": "M",
  "JobTitle": "Quality Control Specialist"
}, {
  "Id": 6,
  "FirstName": "Uriah",
  "LastName": "Turbat",
  "Email": "utat5@aol.com",
  "Gender": "M",
  "JobTitle": "Accounting Assistant II"
}, {
  "Id": 7,
  "FirstName": "Waldemar",
  "LastName": "Fowley",
  "Email": "wfowley6@sun.com",
  "Gender": "M",
  "JobTitle": "Account Coordinator"
}, {
  "Id": 8,
  "FirstName": "Rodolfo",
  "LastName": "Trenchard",
  "Email": "rtrenchard7@yandex.ru",
  "Gender": "M",
  "JobTitle": "Data Coordiator"
}, {
  "Id": 9,
  "FirstName": "Konstance",
  "LastName": "Dudek",
  "Email": "kdudek8@techcrunch.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 10,
  "FirstName": "Monti",
  "LastName": "Perton",
  "Email": "mperton9@youtube.com",
  "Gender": "M",
  "JobTitle": "Operator"
}];
const EmpData1 : Employee[] =[{
  "Id": 1,
  "FirstName": "Raju",
  "LastName": "Deshmukh",
  "Email": "jkif@google.pl",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 2,
  "FirstName": "Eldin",
  "LastName": "Astbery",
  "Email": "east@geocities.jp",
  "Gender": "M",
  "JobTitle": "Senior Editor"
}, {
  "Id": 3,
  "FirstName": "Nahum",
  "LastName": "Mounce",
  "Email": "nmounce2@vk.com",
  "Gender": "M",
  "JobTitle": "Programmer II"
}, {
  "Id": 4,
  "FirstName": "Gallard",
  "LastName": "Standell",
  "Email": "gsta3@europa.eu",
  "Gender": "M",
  "JobTitle": "Account Representative II"
}, {
  "Id": 5,
  "FirstName": "Koenraad",
  "LastName": "Domleo",
  "Email": "kdeo4@cornell.edu",
  "Gender": "M",
  "JobTitle": "Quality Control Specialist"
}, {
  "Id": 6,
  "FirstName": "Uriah",
  "LastName": "Turbat",
  "Email": "utat5@aol.com",
  "Gender": "M",
  "JobTitle": "Accounting Assistant II"
}, {
  "Id": 7,
  "FirstName": "Waldemar",
  "LastName": "Fowley",
  "Email": "wfowley6@sun.com",
  "Gender": "M",
  "JobTitle": "Account Coordinator"
}, {
  "Id": 8,
  "FirstName": "Rodolfo",
  "LastName": "Trenchard",
  "Email": "rtrenchard7@yandex.ru",
  "Gender": "M",
  "JobTitle": "Data Coordiator"
}, {
  "Id": 9,
  "FirstName": "Konstance",
  "LastName": "Dudek",
  "Email": "kdudek8@techcrunch.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 10,
  "FirstName": "Monti",
  "LastName": "Perton",
  "Email": "mperton9@youtube.com",
  "Gender": "M",
  "JobTitle": "Operator"
}];
const EmpData3 : Employee[] =[{
  "Id": 1,
  "FirstName": "Vishakha",
  "LastName": "Subhedar",
  "Email": "vs@subhedar.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 2,
  "FirstName": "Eldin",
  "LastName": "Astbery",
  "Email": "east@geocities.jp",
  "Gender": "M",
  "JobTitle": "Senior Editor"
}, {
  "Id": 3,
  "FirstName": "Nahum",
  "LastName": "Mounce",
  "Email": "nmounce2@vk.com",
  "Gender": "M",
  "JobTitle": "Programmer II"
}, {
  "Id": 4,
  "FirstName": "Gallard",
  "LastName": "Standell",
  "Email": "gsta3@europa.eu",
  "Gender": "M",
  "JobTitle": "Account Representative II"
}, {
  "Id": 5,
  "FirstName": "Koenraad",
  "LastName": "Domleo",
  "Email": "kdeo4@cornell.edu",
  "Gender": "M",
  "JobTitle": "Quality Control Specialist"
}, {
  "Id": 6,
  "FirstName": "Uriah",
  "LastName": "Turbat",
  "Email": "utat5@aol.com",
  "Gender": "M",
  "JobTitle": "Accounting Assistant II"
}, {
  "Id": 7,
  "FirstName": "Waldemar",
  "LastName": "Fowley",
  "Email": "wfowley6@sun.com",
  "Gender": "M",
  "JobTitle": "Account Coordinator"
}, {
  "Id": 8,
  "FirstName": "Rodolfo",
  "LastName": "Trenchard",
  "Email": "rtrenchard7@yandex.ru",
  "Gender": "M",
  "JobTitle": "Data Coordiator"
}, {
  "Id": 9,
  "FirstName": "Konstance",
  "LastName": "Dudek",
  "Email": "kdudek8@techcrunch.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I"
}, {
  "Id": 10,
  "FirstName": "Monti",
  "LastName": "Perton",
  "Email": "mperton9@youtube.com",
  "Gender": "M",
  "JobTitle": "Operator"
}];
