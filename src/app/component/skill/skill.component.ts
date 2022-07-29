import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
    public skill: Skill[] = [];
  

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSk();
  }

  public getSk():void{
    this.skillService.getSkill().subscribe({
      next:(Response: Skill[]) => {
        this.skill=Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
