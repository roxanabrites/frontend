import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacto } from 'src/app/model/contacto.model';
import { Usuario } from 'src/app/model/usuario.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

import { ContactoService } from 'src/app/servicios/contacto.service';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  public contacto:Contacto[]=[];
  public deleteContacto: Contacto | undefined;
  public Cboolen : boolean = false;
  public usuario : Usuario | undefined;
  
  

  constructor(public contactoService: ContactoService,
              public autenticacionService: AutenticacionService,
              public headerService: HeaderService){
              }

  ngOnInit(): void {
    this.getContacto();
    this.boolLogueado();
    this.getUsuario();
  }


  public getContacto():void{
    this.contactoService.getContacto().subscribe({
      next:(Response: Contacto[]) => {
        this.contacto=Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

   //Formulario mediante template   

   //Agregar Contacto

  AddContacto(FormContact: NgForm){
     document.getElementById('add-form-contacto')?.click();
     this.contactoService.addContacto(FormContact.value).subscribe({
      next: (response:Contacto) => {  
        this.getContacto();
        FormContact.reset();
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
        FormContact.reset();
      }
    })
  }

  //Eliminar Contacto
  public DelContacto(idCont: number):void{
    this.contactoService.deleteContacto(idCont).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getContacto();
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  private boolLogueado():boolean {
    if (this.autenticacionService.getToken() != null)
      this.Cboolen=true;
      return this.Cboolen;  //logueado
  }


  // Para pasar los datos del email y ubicacion de mi usuario
  private getUsuario(): void{
    this.headerService.getUsuario().subscribe({
      next: (response: Usuario) =>{
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    }) 
  }

}
