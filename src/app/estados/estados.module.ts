import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';

@NgModule({
  declarations: [EstadosPesquisaComponent, EstadosCadastroComponent],
  imports: [
    CommonModule
  ]
})
export class EstadosModule { }
