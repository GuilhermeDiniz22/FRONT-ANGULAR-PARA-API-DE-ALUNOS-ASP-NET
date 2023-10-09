import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Alunos } from './alunos.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  url:string=environment.apiBaseUrl + '/Alunos';

  list:Alunos[]=[];

  formData : Alunos = new Alunos();
  formEnviado: boolean = false;

  constructor(private http: HttpClient) { }

  getAlunos() {
    return this.http.get(this.url)
    .subscribe({
    next: res=>{
      this.list=res as Alunos[];
    },
  error: err=>{console.log(err)},
    });
  }

  postAlunos() {
    return this.http.post(this.url, this.formData);
  }

  putAlunos() {
    return this.http.put(`${this.url}/${this.formData.id}`, this.formData);
  }

  deleteAlunos(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new Alunos();
    this.formEnviado = false;
  }

}
