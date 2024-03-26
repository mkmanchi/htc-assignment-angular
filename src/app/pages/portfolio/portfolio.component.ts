import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import {HomeComponent} from "./sections/home/home.component";
import {AboutComponent} from "./sections/about/about.component";
import {ContactComponent} from "./sections/contact/contact.component";
import {SkillsComponent} from "./sections/skills/skills.component";
import {ProjectsComponent} from "./sections/projects/projects.component";
import {ExperienceComponent} from "./sections/experience/experience.component";
import {ReferencesComponent} from "./sections/references/references.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, AboutComponent, ContactComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ReferencesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
