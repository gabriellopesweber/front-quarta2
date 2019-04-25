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


@NgModule({
  declarations: [CategoriasPesquisaComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    HttpClientModule,
    SplitButtonModule,
    ToastModule
  ],
  exports:[
    CategoriasPesquisaComponent
  ],
  providers:[
    CategoriasService,
    MessageService
  ]
})
export class CategoriasModule { }
