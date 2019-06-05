import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosService } from './produtos.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PickListModule} from 'primeng/picklist';

@NgModule({
  declarations: [ProdutosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ButtonModule
  ],
  providers: [
    ProdutosService
  ],
  exports:[
    ProdutosCadastroComponent
  ]
})
export class ProdutosModule { }
