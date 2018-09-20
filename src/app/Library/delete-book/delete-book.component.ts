import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../service/service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id: any;
  constructor(public dialogRef: MatDialogRef<DeleteBookComponent>,
    @Inject(MAT_DIALOG_DATA) public bookId: any,
    private dataService: DataService) { }

  ngOnInit() {
    console.log(this.bookId)
   }

   deleteBookType() {

    this.id = this.bookId
    console.log(this.id)

    this.dataService.deleteBook(this.id).subscribe(
      data => this.closeDialog(data),
      error => this.closeDialog(error)
    )
  }
  closeDialog(data) {
    if(data.status===true){
      console.log(data)
      this.dialogRef.close(data);
    }
  }
  
  close(){
    this.dialogRef.close();
  }
  
}
