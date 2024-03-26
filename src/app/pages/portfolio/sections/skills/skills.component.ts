import { Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgForOf,
      CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills:any={
    technologies:[{name:"JavaScript, Typescript, Angular", percent:90,remark:'excellent'}, {name:"Node, React, NestJs, HTML, CSS", percent:70,remark:'very-good'}, {name:"Python, Flask API, PHP, Laravel",percent:70,remark:'very-good'},{name:"Wordpress, Drupal",percent:80,remark:'very-good'}, {name: "AWS(serverless, ec2, S3, lambda, api gateway, cognito, amplify)", percent: 70, remark: 'very-good'}],
    tools:[{name:"Git, Gitlab, Bitbucket, Github",percent:90,remark:'excellent'},{name:"MySql, PostgreSql",percent:90,remark:'excellent'},{name:"Docker, Kubernetes",percent:80,remark:'very-good'},{name:"Algolia Indexer, GCP BigQueries",percent:90,remark:'excellent'},{name:"Photoshop, Lightroom, Figma",percent:70,remark:'very-good'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Agile Development",percent:70,remark:'very-good'}, {name:"Jenkins, CI/CD, Gitlab pipelines",percent:70,remark:'very-good'}, {name:"API Development and Serverless",percent:70,remark:'very-good'}, {name: "Unit Testing, Jest, E2e", percent: 60, remark: 'good'}]
  };

}
