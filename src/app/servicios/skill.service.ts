import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import { urlBack } from './urlBack';


@Injectable({
  providedIn: 'root'
})

export class SkillService {
/*     private  apiServerUrl=environment.apiBaseUrl;
 */    private  apiServerUrl:string = `${urlBack}`;

    constructor(private http: HttpClient) { }


    public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/api/skill/all`); 
    }

    public addSkill(skill: Skill):Observable<Skill>{
      return this.http.post<Skill>(`${this.apiServerUrl}/api/skill/add`, skill); 
    }

    public updateSkill(skill: Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}/api/skill/update`, skill);
    }

    public deleteSkill(skillid: number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/api/skill/delete/${skillid}`); 
    }
}





  

  
