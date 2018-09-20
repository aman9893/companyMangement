import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../../service/service';
import { CreateBookComponent } from '../create-book/create-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { BookUpdateComponent } from '../../Library/book-update/book-update.component';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private service: DataService,
    public dialog: MatDialog, public snackBar: MatSnackBar, ) { }
  bookslist;
  book_length;

  ngOnInit() {
    this.getBooksData();
  }

  getBooksData(): void {
    this.service
      .getBookList().subscribe(
      data => this.getBooksList(data),
      error => this.getBooksList(error)
      );
  }
  getBooksList(data) {
    this.bookslist = data;
    console.log(this.bookslist);
    this.book_length = this.bookslist.length;
    console.log(this.book_length);
  }
  eventHandler(event) {
  }


  createEmpDialog() {
    let dialogRef = this.dialog.open(CreateBookComponent,
      {
        width: '500px',
        height: '',
        data: 'aman',
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  updateBookDialog(updatedata) {
    let dialogRef = this.dialog.open(BookUpdateComponent,
      {
        width: '500px',
        height: '',
        data: updatedata,
        panelClass:'empDialog',
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  allUpdateBookData(){
    
  }

  deleteEmpDialog(id) {
    let dialogRef = this.dialog.open(DeleteBookComponent,
      {
        width: '500px',
        data: id,
        panelClass: 'empDialog',
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'object') {
        if (result.status === true) {
          console.log(result)
          for (var i = 0; i < this.bookslist.length; i++) {

            if (this.bookslist[i].book_id === id) {
              this.bookslist.splice(i, 1);
            }
          }
          this.openSnackBar(result.message, 'Dissmiss')
        }
      }
    });
  }


  stopPropagation(event) {
    console.log(event)
    event.stopPropagation()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
}
