import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from'../service/service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  lossReasonData;
  showLoadingStatus = true;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar
    , private settingService: DataService) { }
  
    ngOnInit() {
      // this.createForm();
    }
  

  // getreasons(): void {
  //   this.settingService.getLossReason()
  //     .subscribe(
  //     data => this.lossReason(data),
  //     error => this.getReasonserror(error)
  //     )
  // }

  // lossReason(data) {
  //   console.log(data)
  //   if (data.status === true) {
  //     this.lossReasonData = data.message;
  //     this.showLoadingStatus = false;
  //   }
  // }
  // getReasonserror(error) {
  //   console.log("error")
  // }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
  

  createTask(): void {
    let dialogRef = this.dialog.open(AddTaskComponent, {
      width: '500px',
      height: 'auto',
      data: '',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // if (typeof result === 'object') {
      //   if (result.status === true) {
      //     var lastInsertedData = result.result[0];
      //     console.log(lastInsertedData)
      //     console.log(this.lossReasonData)
      //     this.lossReasonData.push(lastInsertedData);
      //     console.log(this.lossReasonData)
      //     // let message = "contact Type Data Created Succesfully."
      //     this.openSnackBar(result.message, 'Dissmiss')
      //   }
      // }
    });
  }
}
