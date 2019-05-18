import { EstadosService } from './../estados.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-estados-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {

  estado = [];

  nomeBusca:string;

  constructor(
    private service:EstadosService,
    private msg:MessageService,
    private confirmation:ConfirmationService
  ) { }

  confirmarExclusao(estado:any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir '+estado.nome+'?',
      accept: () => {
        this.excluir(estado);
      }
    });
  }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.estado=dados;
    });
  }

  excluir(estado: any){
    this.service.excluir(estado.id)
    .then(() => {
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Success', detail:'Estado '+estado.nome+' deletado'});
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

}
