import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../service/service';

@Component({
  selector: 'app-delete-empolyee',
  templateUrl: './delete-empolyee.component.html',
  styleUrls: ['./delete-empolyee.component.css']
})
export class DeleteEmpolyeeComponent implements OnInit {

  id: any;
  constructor(public dialogRef: MatDialogRef<DeleteEmpolyeeComponent>,
    @Inject(MAT_DIALOG_DATA) public EmpId: any,
    private dataService: DataService) { }

  ngOnInit() {
    console.log(this.EmpId)
   }

   deleteContactType() {

    this.id = this.EmpId
    console.log(this.id)

    this.dataService.deleteEmployee(this.id).subscribe(
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
