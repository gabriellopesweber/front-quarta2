import { MessageService } from 'primeng/api';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias = [];

  constructor(
    private service:CategoriasService,
    private msg:MessageService
    ) { }

  pesquisar(){
    this.service.pesquisar()
    .then((dados)=>{
      this.categorias=dados;
    });
  }

  excluir(categoria: any){
    this.service.excluir(categoria.id)
    .then(() => {
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Success', detail:'Categoria '+categoria.nome+' deletada'});
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

}
