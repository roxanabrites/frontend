import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion.model';
import { urlBack } from './urlBack';


@Injectable({
  providedIn: 'root'
})

export class EducacionService {
    /* private  apiServerUrl=environment.apiBaseUrl; */
    private  apiServerUrl:string = `${urlBack}`;


    constructor(private http: HttpClient) { }

    public getEduc():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/api/educacion/all`); //[] por que es un array, en header no lo usabamos por que traigo uno solo
    }

    public addEduc(educacion: Educacion):Observable<Educacion>{
      return this.http.post<Educacion>(`${this.apiServerUrl}/api/educacion/add`, educacion); 
    }

    public updateEduc(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/api/educacion/update`, educacion);
    }

    public deleteEduc(educacionId: number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/api/educacion/delete/${educacionId}`); 
    }
}





  

  
