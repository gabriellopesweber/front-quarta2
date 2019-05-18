import { MessageService } from 'primeng/api';
import { EstadosService } from './estados.service';
import { ConfirmDialogModule } from 'primeng/ConfirmDialog';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [EstadosPesquisaComponent, EstadosCadastroComponent],
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
    ConfirmDialogModule,
    DialogModule
  ],exports:[
    EstadosPesquisaComponent,
    EstadosCadastroComponent
  ],
  providers:[
    EstadosService,
    MessageService
  ]
})
export class EstadosModule { }
