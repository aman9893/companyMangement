import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs/internal/observable/concat';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  /* ============ Pipeline api call Url function ================ */
  //  getList() {
  //     return this.http.get(ApiConfig.apiUrl + '' + ApiConfig.apiPath + '' + SettingConfig.setting_get_pipeline_url);
  // }
  getblogdata(){
    return this.http.get('http://localhost:8000/api/blogs');
  }


  postblogData(message) {
    return this.http.post('http://localhost:8000/api/addblogs', message);
  }
  
  registerData(message) {
    return this.http.post('http://localhost:8000/api/register', message);
  }
  loginData(message) {
    return this.http.post('http://localhost:8000/api/login', message);
  }
  getEmpdata() {
    return this.http.get('http://localhost:8000/api/emp_data');
  }

  updateStatus(data: any) {
    return this.http.put('http://localhost:8000/api/update_emp', data);
  }

  updateEmpolyeeData(data: any) {
    return this.http.put('http://localhost:8000/api/update_empolyeeData', data);
  }

  postTask(data: any) {
    return this.http.post('http://localhost:8000/api/post_task', data);
  }

  addEmpolyee(data: any) {
    return this.http.post('http://localhost:8000/api/add_empolyee', data);
  }

  deleteEmployee(id) {
    return this.http.delete('http://localhost:8000/api/delete_empolyee' + '/' + id);
  }


  getPeople() {
    return this.http.get('http://localhost:4000/v1/employees');
  }

  getBookList() {
    return this.http.get('http://localhost:8000/api/book_list');
  }
  postBookData(message) {
    return this.http.post('http://localhost:8000/api/add_book', message);
  }

  deleteBook(id) {
    return this.http.delete('http://localhost:8000/api/delete_book' + '/' + id);
  }

  updateBookStatus(data: any){
    console.log('http://localhost:8000/api/update_booklist',data)
    return this.http.put('http://localhost:8000/api/update_booklist',data);
  }

  

  postEmpoyleeData(message) {
    return this.http.post('http://localhost:4000/v1/create_empolyee', message);
  }
  deleteEmpoyleeData(id) {
    return this.http.delete('http://localhost:4000/v1/delete_empolyee' + '/' + id);
  }

    getNativeWindow() {
      return window;
    
  }

  // deletePipeline(id: any) {
  //     // return this.http.delete( + '/' + id);
  // }
  // updatePipeline(id, data) {
  //     return this.http.put( + '/' + id, data);
  // }

  private empValue = new BehaviorSubject<string>("");
  empData = this.empValue.asObservable();
  empList(message: string) {
    this.empValue.next(message)
  }

}
