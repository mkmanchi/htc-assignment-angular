import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects:any[]= [
    {
      id:"behavox",
      name: "Logiciel Behavox Ltd.",
      technologies: 'Angular 13+, NestJs, Nodejs, Gitlab, GCP Bigqueries, AWS Ec2, S3, Serverless',
      details:"<p>A Compliance related platform to ensure reducing the bad actors within the organization by\n" +
          "                                utilizing AI/ML models to auto-detect the false positives from the email, voice communications.</p>\n" +
          "                            <ul>\n" +
          "                                <li><strong>Assignment Rules:</strong> Additional layer for filtering out the bad data and integrating it with\n" +
          "                                the releasable scenario so that the data passes through this and assigning certain types of\n" +
          "                                    risk policies to the data.</li>\n" +
          "                                <li><strong>STL:</strong> Scenario testing lab that tests the scenarios being delivered to customers and this is\n" +
          "                                    available for customers to test the scenario before applying to the release in production.</li>\n" +
          "                                <li><strong>Feature Releaser:</strong> It is a product developed with Nodejs tasks to ensure tight integration\n" +
          "                                with Gitlab, Jenkins, Jira which enables the development to move fast within the\n" +
          "                                    organization</li>\n" +
          "                                <li><strong>Archiving:</strong> Dashboard for analyzing the alerts that are generated from Google\n" +
          "                                microservices. Developed in NestJs to query BigQuery Data and expose the endpoints and\n" +
          "                                Angular13+ to generate a dynamic dashboard with Search Filters that support Proximity\n" +
          "                                    and Wildcards in the queries.</li>\n" +
          "                            </ul>",
      detailIsDisplayed: false,
    },
    {
      id:"array",
      name: "Array Networks - LoadBalancer & Zero Trust",
      technologies: 'Angular 10+, Python, AWS, S3, Serverless, Nodejs, Nginx',
      details:"<p>Array introduced the concept of integrated traffic management – providing essential application\n" +
          "                                delivery and security in a manner that streamlines data center infrastructure and administration.</p>\n" +
          "                            <ul>\n" +
          "                                <li><strong>Zentry Security: </strong> A new approach to enterprise security built on zero trust principles\n" +
          "                                    and zen-like ease-of-use. Zentry holds internal and external users to the same security\n" +
          "                                    standard. No trusted networks. OS-agnostic browser-based access. No client to install,\n" +
          "                                    manage or explain to end users. Set adaptive security policies for specific Web, SSH,\n" +
          "                                    RDP, VNC and Telnet applications.</li>\n" +
          "                                <li><strong>Amplifier Client:</strong> Used to amplify the traffic to n times by using a standalone server\n" +
          "                                    communicating with Rest API’s of load balancers.</li>\n" +
          "                                <li><strong>Customer's MS:</strong> Provides a way for the customer of array to login to this platform\n" +
          "                                    and then view the devices they procured and get alerts by expiring contracts.</li>\n" +
          "                            </ul>",
      detailIsDisplayed: false,
    }
  ];
  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }

}
