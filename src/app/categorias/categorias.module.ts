import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';

import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { CategoriasService } from './categorias.service';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessageService} from "primeng/api"
import {ToastModule} from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/ConfirmDialog';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';



@NgModule({
  declarations: [CategoriasPesquisaComponent, CategoriasCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    HttpClientModule,
    SplitButtonModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule
  ],
  exports:[
    CategoriasPesquisaComponent,
    CategoriasCadastroComponent
  ],
  providers:[
    CategoriasService,
    MessageService
  ]
})
export class CategoriasModule { }
