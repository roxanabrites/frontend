import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlBack } from './urlBack';
const httpOptions = {
  Headers: new HttpHeaders({
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  /* private  url=environment.apiBaseUrl; */
  private  url:string = `${urlBack}/api/login`;
  currentUserSubject:BehaviorSubject<any>;
  
  public tokenActual!:String;

  constructor(private http:HttpClient){
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(
        /* JSON.parse(sessionStorage.getItem('username') || '{}'); */
        sessionStorage.getItem('username') || '{}');
  }


  public IniciarSesion(credenciales:any): Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data => {
      console.log("Iniciar Session");
      console.log('token' + JSON.parse(JSON.stringify(data)).token); 
      sessionStorage.setItem('token', JSON.stringify(data));
      this.tokenActual = JSON.parse(JSON.stringify(data)).token;
      sessionStorage.setItem('currentUser', JSON.parse(JSON.stringify(data)).token);  
/*    sessionStorage.setItem('token',       JSON.parse(JSON.stringify(data)).token);*/
      sessionStorage.setItem('username',    JSON.parse(JSON.stringify(data)).username);
      this.currentUserSubject.next(data); 
      return data;
      }
    ))
  }

    getToken(){
      return sessionStorage.getItem("token");
    }

    public logIn():boolean{
      return (sessionStorage.getItem("token") != null) && (sessionStorage.getItem("token") != "") 
    }

    public logOut(): void{
      this.tokenActual = "";
      sessionStorage.setItem('token', "");
    }
    
    get UsuarioAutenticado(){
      return this.currentUserSubject.value;  /* probando */
    }
}