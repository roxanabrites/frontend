import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    public usuario: Usuario | undefined;

  constructor(private headerService: HeaderService) {
    
   }

  ngOnInit(): void {
    this.getUsuario();
  }


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
