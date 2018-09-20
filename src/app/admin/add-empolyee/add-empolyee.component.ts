import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from'../../service/service';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef,MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
@Component({
  selector: 'app-add-empolyee',
  templateUrl: './add-empolyee.component.html',
  styleUrls: ['./add-empolyee.component.css']
})
export class AddEmpolyeeComponent implements OnInit {

  formStatus= false;
  saveFlag=true;
  constructor(
    private formBuilder: FormBuilder, private dataService: DataService,
    public dialogRef: MatDialogRef<AddEmpolyeeComponent>,
    @Inject(MAT_DIALOG_DATA) public update_data: any, public snackBar: MatSnackBar) { }

    empAddForm: FormGroup;
    updateValue;
    updateFlag;

  ngOnInit() {
    console.log(this.update_data)
    if(this.update_data !== null){
      this.updateValue=this.update_data.data
      console.log(this.updateValue.emp_name)
      console.log(this.update_data.flag)
      this.updateFlag=this.update_data.flag
      
    }

    this.formStatus=true;
    this.createForm();
  }

  private createForm() {
    
    this.empAddForm = this.formBuilder.group({

      emp_name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      emp_phone: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      emp_email: new FormControl('', {
          validators: [Validators.pattern("[^ @]*@[^ @]*"),Validators.required],
          updateOn: 'change'
        }),

      emp_position: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      emp_status: new FormControl(false),
      
    });
     
    if(this.updateValue !== undefined){
      this.saveFlag=false;
      this.empAddForm.controls['emp_name'].setValue(this.updateValue.emp_name)
      this.empAddForm.controls['emp_phone'].setValue(this.updateValue.emp_phone)
      this.empAddForm.controls['emp_email'].setValue(this.updateValue.emp_email)
      this.empAddForm.controls['emp_position'].setValue(this.updateValue.emp_position)
    }
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
    return " Enter  valid Email id"
  }

  empPhoneValid(){
    return " phone is Required Feild"
  }
  empDesignationValid(){
    return "Designation is Required Feild"
  }
  
  onSubmit() {

    if (this.empAddForm.valid) {

      console.log(this.empAddForm.value)
      let empAddFormData={
        
        emp_name: this.empAddForm.controls['emp_name'].value,
        emp_phone: this.empAddForm.controls['emp_phone'].value,
        emp_email: this.empAddForm.controls['emp_email'].value,
        emp_position: this.empAddForm.controls['emp_position'].value,
        emp_status: this.empAddForm.controls['emp_status'].value,
        start_at: new Date(),
        out_time:''
       }

       console.log(empAddFormData)

      this.dataService.addEmpolyee(empAddFormData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )}
      this.empAddForm.reset();
  }

  closeDialog(data) {
     console.log(data)
     this.openSnackBar(data.message, 'Dissmiss')
     this.dialogRef.close(data);
  }
  cancel(): void {
    this.empAddForm.reset();
    this.dialogRef.close();
  }

  onUpdate() {

    if (this.empAddForm.valid) {

      console.log(this.empAddForm.value)
      let empAddFormData={
        emp_id:this.updateValue.emp_id,
        emp_name: this.empAddForm.controls['emp_name'].value,
        emp_phone: this.empAddForm.controls['emp_phone'].value,
        emp_email: this.empAddForm.controls['emp_email'].value,
        emp_position: this.empAddForm.controls['emp_position'].value,
        emp_status: this.empAddForm.controls['emp_status'].value,
        start_at: new Date(),
        out_time:''
       }

      this.dataService.updateEmpolyeeData(empAddFormData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )}
      this.empAddForm.reset();
   }
}
