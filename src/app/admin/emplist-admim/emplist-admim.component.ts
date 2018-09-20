import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../../service/service';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { AddEmpolyeeComponent } from '../../admin/add-empolyee/add-empolyee.component';
import { EmpListDetailsbyidComponent } from '../../admin/emp-list-detailsbyid/emp-list-detailsbyid.component';
@Component({
  selector: 'app-emplist-admim',
  templateUrl: './emplist-admim.component.html',
  styleUrls: ['./emplist-admim.component.css']
})
export class EmplistAdmimComponent implements OnInit {

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
    this.emplist = data;
    this.setEmpSubjectData(this.emplist )
  }

  setEmpSubjectData(emplist){
    this.dataService.empList(emplist)
  }

  getEmpdataerror(error) {
    console.log("error")
  }


  createTask(taskData): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '550px',
      data:taskData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  createEmpolyee(): void {
    const dialogRef = this.dialog.open(AddEmpolyeeComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  stopPropagation(event) {
    console.log(event)
    event.stopPropagation()
  }

  detailsEmpolyee(update_data): void {
    const dialogRef = this.dialog.open(EmpListDetailsbyidComponent, {
      width: '550px',
      data:update_data,
      panelClass:'empDialog',
      autoFocus:false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(this.emplist);
      console.log(update_data.emp_id);
      
      if (typeof result === 'object') {
        if (result.status === true) {
          console.log(result)
          for (var i = 0; i < this.emplist.length; i++) {
            if (this.emplist[i].emp_id === update_data.emp_id) {
              this.emplist.splice(i, 1);
            }
          }
          this.openSnackBar(result.message, 'Dissmiss')
        }
      }
    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }

  eventHandler(event){

  }
}
