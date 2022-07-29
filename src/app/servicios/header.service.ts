import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario.model';
import { urlBack } from './urlBack';


@Injectable({
  providedIn: 'root'
})

export class HeaderService {
/*     private  apiServerUrl=environment.apiBaseUrl;
 */    private  apiServerUrl:string = `${urlBack}`;


    constructor(private http: HttpClient) { }

    public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/api/usuario/id/1`); //Ya que solo hay un usuario.
  }

    public updateUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/api/usuario/update`, usuario);
  }
}





  

  
