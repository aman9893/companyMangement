import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
import { DeleteEmpolyeeComponent } from '../../admin/delete-empolyee/delete-empolyee.component';
import { DataService } from '../../service/service';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { AddEmpolyeeComponent } from '../../admin/add-empolyee/add-empolyee.component';
@Component({
  selector: 'app-emp-list-detailsbyid',
  templateUrl: './emp-list-detailsbyid.component.html',
  styleUrls: ['./emp-list-detailsbyid.component.css']
})
export class EmpListDetailsbyidComponent implements OnInit {
  nativeWindow;

  constructor(public dialogRef: MatDialogRef<EmpListDetailsbyidComponent>,
    @Inject(MAT_DIALOG_DATA) public Updatedata: any, public dialog: MatDialog,
    public dataService: DataService) {
    this.nativeWindow = dataService.getNativeWindow();
  }

  ngOnInit() {
    console.log(this.Updatedata)
   }

  deleteEmpoyee(update_data): void {
    const dialogRef = this.dialog.open(DeleteEmpolyeeComponent, {
      width: '550px',
      data: update_data,
      panelClass: 'empDialog',
      autoFocus: false
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dialogRef.close(result);

    });
  }

  editEmpoyee(Updatedata) {

    let updatedata = {
      data: Updatedata,
      flag: 'update'
    }
    const dialogRef = this.dialog.open(AddEmpolyeeComponent, {
      width: '550px',
      data: updatedata
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result);
      this.dialogRef.close();
    });
  }

  sendEmail(email) {
    this.nativeWindow.open("https://mail.google.com/mail?view=cm&tf=0(&to=" + email + "", '_blank');
  }
  CloseUpdateDialog(){
    this.dialogRef.close();
  }
}