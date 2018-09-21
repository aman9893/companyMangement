import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from'../../service/service';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef,MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

 
  formStatus= false;
  saveFlag=true;
  constructor(
    private formBuilder: FormBuilder, private dataService: DataService,
    public dialogRef: MatDialogRef<BlogComponent>,
    @Inject(MAT_DIALOG_DATA) public update_data: any, public snackBar: MatSnackBar) { }

    blogAddForm: FormGroup;
    updateValue;
    updateFlag;

  ngOnInit() {

    this.formStatus=true;
    this.createForm();
  }

  private createForm() {
    
    this.blogAddForm = this.formBuilder.group({

      blog_name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      blog_details: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      blog_date: new FormControl('', {
        }),
    });
     
  }

  getError() {
    return ' *This is required feild'
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
  empNameValid(){
      return " Empolyee Name  is Required Feild"
  }
  empEmailValid(){
    return " Enter Blog Details"
  }

  
  onSubmit() {

    if (this.blogAddForm.valid) {

      console.log(this.blogAddForm.value)
      
      const now = Date.now();

      let blogAddFormData={
        
        blog_name: this.blogAddForm.controls['blog_name'].value,
        blog_details: this.blogAddForm.controls['blog_details'].value,
        blog_date: now
    
       }
       console.log(blogAddFormData)

      this.dataService.postblogData(blogAddFormData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )}
      this.blogAddForm.reset();
  }

  closeDialog(data) {
     console.log(data)
     this.openSnackBar(data.message, 'Dissmiss')
     this.dialogRef.close(data);
  }
  cancel(): void {
    this.blogAddForm.reset();
    this.dialogRef.close();
  }

  selectedFile: File;
  
    onFileChanged(event) {
      console.log(event)
      this.selectedFile = event.target.files[0]
      console.log( this.selectedFile)
    }
  
    onUpload() {
      // upload code goes here
    }
  
    //onUploadapi() {
   ///   this.http.post('my-backend.com/file-upload', uploadData, {
    ///    reportProgress: true,
   ///     observe: 'events'
    //  })
    //    .subscribe(event => {
    //      console.log(event); // handle event here
      //  });
   // }
}
