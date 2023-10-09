import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../shared/alunos.service';
import { Alunos } from '../shared/alunos.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styles: [
  ]
})
export class AlunosComponent implements OnInit{
  constructor(public service: AlunosService) { }
    ngOnInit(): void {
      this.service.getAlunos();
    }
  atualizarForm(selecionarAluno: Alunos) {
    this.service.formData = Object.assign({}, selecionarAluno);
  }
deletarAluno(id: number) {
  if (confirm('Tem certeza que deseja excluir este registro?')) {
    this.service.deleteAlunos(id).subscribe({
      next: res=>{
      this.service.getAlunos();
      },
      error: err=>{console.log(err)},
      })
  }
}
}
