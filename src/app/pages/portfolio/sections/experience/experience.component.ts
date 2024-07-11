import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences:any=[
    {
      title: "Technical Lead / Manager",
      company: 'HTC Global Services',
      location: 'Bengaluru, Karnataka',
      period: "Feb'2024 - tilldate",
    },
    {
      title: "Senior FE Developer",
      company: 'Logiciel Behavox (Canada) Ltd',
      location: 'Montreal, QC, CA',
      period: "Jun'2021 - Jan'2024 (2 years 8 months)",
    },{
      title: "UI Engineer",
      company: 'Array Networks India Pvt. Ltd',
      period: "Nov'2016 - May'2021 (4 years 6 months)",
    },{
      title: "Sr. Software Engineer",
      company: 'Dabee Technologies India Pvt. Ltd',
      period: "Sep'2014 - Oct'2016",
    },{
      title: "Frontend UI Lead",
      company: 'Snapwiz Edutec Ltd.',
      period: "Aug'2013 - Aug'2014",
    },{
      title: "Sr. Software Engineer",
      company: 'Dabee Technologies India Pvt. Ltd',
      period: "Mar'2013 - Aug'2013",
    },{
      title: "Sr. Software Engineer",
      company: 'Ness Technologies India Pvt. Ltd',
      period: "May'2011 - Mar'2013",
    },{
      title: "Assosiate Web Technologist",
      company: 'AOL Online India Pvt. Ltd',
      period: "Nov'2009 - Apr'2011",
    },{
      title: "Web Developer",
      company: 'Grafixvalley',
      period: "Aug'2007 - Nov'2009",
    }];
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;

  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }

}
