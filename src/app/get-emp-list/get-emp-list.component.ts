import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../service/service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-get-emp-list',
  templateUrl: './get-emp-list.component.html',
  styleUrls: ['./get-emp-list.component.css']
})
export class GetEmpListComponent implements OnInit {

  lossReasonData;
  showLoadingStatus = true;
  emplist;
  inOutStatus;

  color = 'primary';
  checked = false;
  disabled = false;

  device: boolean = true;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar, private dataService: DataService) { }

  ngOnInit() {
    this.getEmplist();
  }

  getEmplist(): void {
    this.dataService.getEmpdata()
      .subscribe(
      data => this.getEmpdata(data),
      error => this.getEmpdataerror(error)
      )
  }


  getEmpdata(data) {
    console.log(data)
    this.emplist = data
  }
  getEmpdataerror(error) {
    console.log("error")
  }

  ChangeStatus(event, id) {
    this.inOutStatus = event.checked
    console.log(this.inOutStatus)
    console.log(id)
    //new object create 
    let data = {
      emp_status: this.inOutStatus,
      emp_id : id,
      out_time : new Date(),
    }
    // let emp_id = id;
    console.log(data)
    this.dataService.updateStatus(data).subscribe(
      data => this.updateCheckStatusData(data),
      error => this.updateCheckStatusError(error)
    )
  }
  updateCheckStatusData(data) {
    console.log(data)
  }
  
  updateCheckStatusError(error) {
    console.log(error)
    this.getEmplist();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
}
