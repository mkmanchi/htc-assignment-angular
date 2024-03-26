import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import {HomeComponent} from "./sections/home/home.component";
import {AboutComponent} from "./sections/about/about.component";
import {ContactComponent} from "./sections/contact/contact.component";
import {SkillsComponent} from "./sections/skills/skills.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, AboutComponent, ContactComponent, SkillsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
