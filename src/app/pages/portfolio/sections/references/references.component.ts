import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references:any=[{
    personImg: "assets/images/james.jpg",
    personFullname: 'James Vu',
    personPosition: "QAEIII",
    personCompany: 'Behavox',
    message: "I had the privilege of collaborating closely with Mahendra, and I can confidently say that he is an exceptional Frontend Developer.\n"+
    "Mahendra's proactive attitude towards tackling UI bugs was truly remarkable. Whenever we encountered new issues, he would swiftly dive in, analyze the situation, and come up with effective solutions. His dedication to ensuring the smooth functioning of our UI was evident in every task he undertook.\n"+
    "Moreover, Mahendra's genuine heart and friendly demeanor made him a joy to work with. He consistently showed attentiveness and kindness towards his colleagues, creating a positive and supportive atmosphere within our team.\n"+
    "I really recommend Mahendra to any team seeking a talented and dedicated frontend developer. His skills and personality make him a valuable asset, and I am grateful for the opportunity to have worked alongside him.\n"+
    "Thank you for everything, Mahendra!"
  },{
    personImg: "assets/images/kirill.jpeg",
    personFullname: 'Kirill Barmin',
    personPosition: "SSE",
    personCompany: 'Behavox',
    message: "I had the pleasure of working with Mahendra at Behavox for more than 2 years together and I really appreciate Mahendra for his reliability and a remarkable willingness to assist in reaching team's objectives! \n" +
        " He has significant knowledge across a wide range of Frontend technologies and he has proven that he can quickly immerse himself in a complex task, take a lead on it, and see it through to completion.\n" +
        " One potential area for growth would be in taking a more proactive approach to identify the weak parts of the project and proactively push its quality even further.\n" +
        " Overall, Mahendra’s professionalism, experience, and knowledge of modern technologies stack make him a valuable asset to any team. I am confident that he will bring the same level of dedication and commitment to any future role he undertakes.",
  }, {
    personImg: "assets/images/periya.jpeg",
    personFullname: 'Periyasamy Murugaiyan',
    personPosition: "SSE",
    personCompany: 'Array Networks',
    message: "Mr. Mahendra is such a delightful person to have around. He is a great leader and an outstanding mentor with rich experience. He is innovative, organized as well as helpful and is always open to ideas and suggestions. He has made me improve in many professional areas and taught me about leadership skills. It was a pleasure to be worked with him.",
  }, {
    personImg: "assets/images/siva.jpeg",
    personFullname: 'Sivaramakrishna Kamalapadu',
    personPosition: "Principal SE",
    personCompany: 'F5',
    message: "I have worked with Mahendra for more than 2 years and He is a very good team player.\n" +
        "Quick to adapt to new technologies and has in-depth knowledge in UI design. He has good networking knowledge combined with UI expertise which makes him stand-out.",
  }, {
    personImg: "assets/images/vivek.jpeg",
    personFullname: 'Vivekananda Potti',
    personPosition: "PM",
    personCompany: 'Cognizant',
    message: "Mahe is fantastic at studies. He is a very helpful person. When we are doing the projects in the college level itsself, his technical skills are unqiue & he solves the problem very quick. He is very cool guy & my benchmate for six years in college.",
  }, {
    personImg: "assets/images/kavya.jpeg",
    personFullname: 'Kavya',
    personPosition: "Sr. QA Manager",
    personCompany: 'Jifi',
    message: "I have worked with mahendra more than a year.He has got talent in handling critical situation \n" +
        "He is very helpful and a person who can get along well everyone in the Team. He takes ownership and is very responsible person one can depend on.",
  }, {
    personImg: "assets/images/vaibhav.jpeg",
    personFullname: 'Vaibhav Srivastava',
    personPosition: "Architect",
    personCompany: 'FCI Consulting, Texas',
    message: "Mahendra is fantastic to work with. Working with him was really a good learning experience. Ground to earth person. His technical skills are awesome and very unique. His problem finding abilities are really good.",
  }];
}
