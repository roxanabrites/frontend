import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HeaderService } from 'src/app/servicios/header.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;
  public botl: boolean = false;
  form: FormGroup;
  
  

  constructor(private FormBuilder:FormBuilder,
              private headerService : HeaderService,
              private autenticacionService:AutenticacionService,
              private tokenService:TokenService,
              private router:Router
              ){
     this.form = this.FormBuilder.group(
      {       
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
/*    deviceId:["1786788768"],
      deviceType:["DEVICE_TYPE_ANDROID"],
      NotificationToken:["6765757Seececc34"] */
    
      })
  }

  
  ngOnInit(): void { 
    this.getUsuario();
    this.botLogueado();
    
  }

  /* Mis Datos */
  public getUsuario():void{
    this.headerService.getUsuario().subscribe({
      next: (response: Usuario) =>{
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  /* Login */
  get Email(){
    return this.form.get('email');
  }
  
  get Password(){
    return this.form.get('password');
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      window.location.reload(); //Hacer un if para que no refresque y tire un erro de pass
      /* this.router.navigate(['PortfolioComponent']); */
      })
    }

  public logOut(){ 
    this.tokenService.logOut();
    window.location.reload()
    return null;
  }

  private botLogueado():boolean {
    if (this.autenticacionService.getToken() != null)
      this.botl=true;
      return this.botl;  //logueado
  }
}
