import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
import { DataService } from '../../service/service';
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public Updatedata: any, public dialog: MatDialog,
    public dataService: DataService) {
  }
  empListdata;
  empName;
  book_id;
  book_submit_status;

  ngOnInit() {
    console.log(this.Updatedata)
    this.getempListService()
    this.getEmplist()
  }

  getEmplist(): void {
    this.dataService.getEmpdata()
      .subscribe(
      data => this.getEmpdata(data)
      )
  }

  getEmpdata(data) {
    console.log(data)
    this.empListdata = data;
  }


  getempListService() {
    this.dataService.empData.subscribe(
      data => this.checkDataStatus(data),
    )
  }
  checkDataStatus(data) {
    console.log(data)
    this.empListdata = data;
  }

  CloseUpdateDialog() {
    this.dialogRef.close();
  }

  empChangeData(event, id) {
    console.log(event.value)
    this.empName = event.value;
    console.log(this.empName)
    this.book_id = id;
  }

  onSubmit() {
    //new object create 
    let data = {
      book_id: this.book_id,
      empolyee_name: this.empName,
      book_status: false,
    }
    // let emp_id = id;
    console.log(data)
    this.dataService.updateBookStatus(data).subscribe(
      data => this.updateCheckStatusData(data)
    )
  }

  updateCheckStatusData(data) {
    console.log(data)
    if (data.status === true) {
      this.dialogRef.close();
    }
  }

  updateStatus(event) {
    this.book_submit_status = event.checked
  }

  onupdate() {
    // let emp_id = id;
    let data = {
      book_id: this.Updatedata.book_id,
      empolyee_name: 'Book Not Issue',
      book_status: this.book_submit_status,
    }
    console.log(data)
    this.dataService.updateBookStatus(data).subscribe(
      data => this.updateCheckStatusData(data)
    )
  }
}
