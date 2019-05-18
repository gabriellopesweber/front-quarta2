import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from './model';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadosURL = 'http://localhost:8080/estados';

  urlFiltro

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any):Promise<any>{

    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/estados/filtro?nome='+filtro.nome;
    } else {
      this.urlFiltro = 'http://localhost:8080/estados';
    }
    console.log(this.urlFiltro);
    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.estadosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(estados: Estado): Promise<any>{
    return this.http.post(this.estadosURL, estados)
    .toPromise();
  }

  alterar(estados: Estado): Promise<any>{
    return this.http.put(this.estadosURL+'/'+estados.id, estados)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosURL+'/'+codigo).toPromise();
  }
}
