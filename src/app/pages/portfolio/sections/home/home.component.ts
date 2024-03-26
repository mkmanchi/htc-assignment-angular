import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
    var options = {
      strings: ['','Full-Stack', 'WEB','Mobile'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}
