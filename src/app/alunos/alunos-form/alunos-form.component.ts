import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alunos } from 'src/app/shared/alunos.model';
import { AlunosService } from 'src/app/shared/alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styles: [
  ]
})
export class AlunosFormComponent {
  constructor(public service: AlunosService) { }

onSubmit(form: NgForm) {
this.service.formEnviado = true;
  if(form.valid){
    if(this.service.formData.id==0){
      this.inserirDados(form);
    }else{
      this.atualizarDados(form);
    }
  }

}

inserirDados(form: NgForm) {
  this.service.postAlunos().subscribe({
        next: res=>{
        this.service.list = res as Alunos[];
        this.service.resetForm(form);
        },
        error: err=>{console.log(err)},
        })
  }

  atualizarDados(form: NgForm) {
    this.service.putAlunos().subscribe({
      next: res=>{
      this.service.list = res as Alunos[];
      this.service.resetForm(form);
      },
      error: err=>{console.log(err)},
      })
  }
}
