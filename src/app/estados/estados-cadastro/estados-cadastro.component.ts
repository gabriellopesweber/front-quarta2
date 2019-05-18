import { Estado } from './../model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from './../../categorias/categorias.service';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {

  estados = new Estado();

  constructor(
    private service: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    private router: Router
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.estados)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Estado '+this.estados.nome+' cadastrado'});
      form.reset();
    });
  }

  carregarEstado(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => { //ErrowFunction
        this.estados = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.estados)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Estado '+this.estados.nome+' alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
      this.router.navigate(['estados']);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.estados.id);
  }

  ngOnInit() {
    const codigoEstado = this.rota.snapshot.params['id'];
    if(codigoEstado){
      this.carregarEstado(codigoEstado);
    }
  }

}
