import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/service';
import { AppComponent } from './app.component';
import { MaterialModule } from './materail';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ROUTING } from './routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { HeaderTaskComponent } from './header-task/header-task.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { GetEmpListComponent } from './get-emp-list/get-emp-list.component';
import { DeleteEmpListComponent } from './delete-emp-list/delete-emp-list.component';
import { EmplistAdmimComponent } from './admin/emplist-admim/emplist-admim.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { EmpListDetailsbyidComponent } from './admin/emp-list-detailsbyid/emp-list-detailsbyid.component';
import { AddEmpolyeeComponent } from './admin/add-empolyee/add-empolyee.component';
import { DeleteEmpolyeeComponent } from './admin/delete-empolyee/delete-empolyee.component';
import { AuthService } from './authservice';
import { AuthGuard } from './auth.guard';
import { NotAuthGuardService } from './no-auth-guard-service';
import { BooklistComponent } from './Library/booklist/booklist.component';
import { DeleteBookComponent } from './Library/delete-book/delete-book.component';
import { CreateBookComponent } from './Library/create-book/create-book.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { BookUpdateComponent } from './Library/book-update/book-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    ListTaskComponent,
    HeaderTaskComponent,
    CreateEmpComponent,
    GetEmpListComponent,
    DeleteEmpListComponent,
    EmplistAdmimComponent,
    AdminDashbordComponent,
    EmpListDetailsbyidComponent,
    AddEmpolyeeComponent,
    DeleteEmpolyeeComponent,
    BooklistComponent,
    DeleteBookComponent,
    CreateBookComponent,
    BookUpdateComponent

  ],
  
  imports: [
    MaterialModule,ROUTING,BrowserAnimationsModule,
    BrowserModule, HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
  ],
  providers: [DataService,AuthService,AuthGuard,NotAuthGuardService
  ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ 
    AddTaskComponent,
    DeleteTaskComponent,AddEmpolyeeComponent,
    EmpListDetailsbyidComponent,
    DeleteEmpolyeeComponent,
    DeleteBookComponent,
    CreateBookComponent,
    BookUpdateComponent]
})
export class AppModule { }
