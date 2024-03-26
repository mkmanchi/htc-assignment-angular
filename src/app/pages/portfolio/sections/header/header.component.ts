import { Component, OnInit } from '@angular/core';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  language:any="";
  constructor() {
    if(localStorage.getItem("lang")){
      this.language=localStorage.getItem("lang");
    }
    else{
      this.language='fr';
    }
  }

  languageChange($event:any){
    let lang=$event.value;
    localStorage.setItem("lang", lang);
  }

  ngOnInit(): void {
    
  }
}
