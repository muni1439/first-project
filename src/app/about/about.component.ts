import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  showEducation:boolean=true;
  showProjects:boolean=true;
  description1:string='GameBuzz is a comprehensive sports information platform designed to deliver real-time updates, detailed statistics, and in-depth '+
'analysis for various sports. Inspired by Cricbuzz, GameBuzz aims to provide an intuitive and engaging user experience for sports '+
'enthusiasts, offering a seamless way to stay connected with their favorite games, teams, and players.'
description2='Led a team in implementing a text summarization project, explored advanced NLP techniques such as '+ 
'Abstractive and Extractive text summarization, using Python and Python libraries to implement algorithms.'

  projects=[
    {name:'GameBuzz' , description: this.description1},
    {name:'Text Summarization using Natural Language Processing Techniques' , description:this.description2}
  ]

}
