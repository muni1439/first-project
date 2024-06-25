import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  LinkedinURL='https://www.linkedin.com/in/kapisettisurya/';
  GithubURL='https://github.com/muni1439';
  constructor(public router : Router){

  }

  onHome(){
    this.router.navigate(['./portfolio-website/home']);
  }

  onAbout(){
    this.router.navigate(['./portfolio-website/about']);
  }

  onContact(){
    this.router.navigate(['./portfolio-website/contact']);
  }
}
