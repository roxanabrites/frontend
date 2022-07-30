import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { EstudiosComponent } from './component/estudios/estudios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './component/contacto/contacto.component';
import { SkillComponent } from './component/skill/skill.component';
import { AboutComponent } from './component/about/about.component';
import { RouterModule } from '@angular/router';
import { InterceptorService } from './servicios/interceptor.service';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudiosComponent,
    ContactoComponent,
    SkillComponent,
    AboutComponent,
    PortfolioComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, 
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
