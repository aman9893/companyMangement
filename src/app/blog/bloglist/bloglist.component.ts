import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../../service/service';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar, private dataService: DataService) { }

    bloglist;

  ngOnInit() {
    this.getEmplist();
  }

  getEmplist(): void {
    this.dataService.getblogdata()
      .subscribe(
      data => this.getEmpdata(data),
      )
  }

  getEmpdata(data) {
    console.log(data)
    this.bloglist = data;

  }

  createBlog(): void {
    const dialogRef = this.dialog.open(BlogComponent, {
      width: '550px',
      data:'blog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  stopPropagation(event) {
    console.log(event)
    event.stopPropagation()
  }
}

