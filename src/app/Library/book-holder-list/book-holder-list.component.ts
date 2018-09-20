import { Component, OnInit } from '@angular/core';
import { DataService } from'../../service/service';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-book-holder-list',
  templateUrl: './book-holder-list.component.html',
  styleUrls: ['./book-holder-list.component.css']
})
export class BookHolderListComponent implements OnInit {

  // constructor(private service: DataService,
  //   public dialog: MatDialog) {}
  // peoples;
  // people_length;
  ngOnInit() {
    // this.getPeopleData();
  }
//   getPeopleData(): void {
//     this.service
//       .getPeople().subscribe(
//          data => this.getPeopleList(data),
//          error => this.getPeopleList(error)
//       );
//  }
//     getPeopleList(data) {
//         console.log(data);
//         this.peoples = data;
//         console.log(data);
//         this.appService.updateissueDataList (data);
//         console.log(this.peoples);
//         this.people_length = this.peoples.length;
//  }
//   createEmpDialog() {
//     let dialogRef = this.dialog.open(BookHolderCreateComponent,
//        {
//           width: '600px',
//           height: '',
//           data: 'aman',
//           autoFocus: false
//           });
//           dialogRef.afterClosed().subscribe(result => {
//           console.log(result);
//           });
//         }

//   deleteEmpDialog(id) {
//        let dialogRef = this.dialog.open(BookHolderDeleteComponent,
//            {
//              width: '500px',
//              height: '',
//               data: id,
//              autoFocus: false
//             });
//                dialogRef.afterClosed().subscribe(result => {
//                console.log(result);
//            });
//        }
//    upadateEmpDialog(people) {
//         let dialogRef = this.dialog.open(BookHolderComponent,
//              {
//               width: '500px',
//               height: '',
//                data: people,
//               autoFocus: false
//              });
//                dialogRef.afterClosed().subscribe(result => {
//                console.log(result);
//            });
//         }
//         upadateEmpDetailsDialog(people) {
//           let dialogRef = this.dialog.open(UpdateBookHolderListComponent,
//                {
//                 width: '500px',
//                 height: '',
//                  data: people,
//                 autoFocus: false
//                });
//                  dialogRef.afterClosed().subscribe(result => {
//                  console.log(result);
//              });
//      }

//      stopPropagation(event) {
//       event.stopPropagation();
//      }

}
